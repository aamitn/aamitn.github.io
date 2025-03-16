"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    return scrollY.onChange((y) => {
      setExpanded(y > 50); // Expand navbar when scrolling down past 50px
    });
  }, [scrollY]);

  return (
    <motion.div
      animate={{ scale: expanded ? 1.05 : 0.95 }} // Start small, expand on scroll
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14 text-amber-600 dark:text-blue-500"
    >
      <Dock
        className={cn(
          "z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background transform-gpu transition-all duration-300",
          expanded ? "scale-110 shadow-lg" : "scale-80"
        )}
      >
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 transition-transform duration-300 hover:scale-110"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 transition-transform duration-300 hover:scale-110"
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </motion.div>
  );
}
