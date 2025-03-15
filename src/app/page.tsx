"use client"
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [animateKey, setAnimateKey] = useState(0);

  // Re-trigger animation when section comes back into view
  useEffect(() => {
    if (inView) setAnimateKey((prev) => prev + 1);
  }, [inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    }),
  };

  const timelineVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        delay,
      },
    }),
  };
  
  

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, // More movement
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3, ease: "easeOut" } // Faster animation
    },
  };
  const jellyBounce = {
    hidden: { opacity: 0, y: 50, rotate: -10, skewX: -5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: [0, 10, -10, 0], // Slight rotation wiggle
      skewX: [0, 5, -5, 0], // Skewing effect
      transition: {
        delay: i * 0.05, // Stagger effect
        duration: 0.5, 
        type: "spring",
        stiffness: 120,
        damping: 8,
      },
    }),
  };
  

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
    <motion.section
          id="hero"
          ref={ref}
          key={animateKey} // Forces re-animation on each scroll
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
          exit={{ opacity: 0, y: 50 }}
          className="py-12 w-full"
        >
          <div className="mx-auto w-full max-w-full space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </motion.section>
        
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      
        <motion.section 
        id="work"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Repeats every time you scroll past
        className="flex min-h-0 flex-col gap-y-3"
      >
        {/* Work Experience Title */}
        <motion.h2 
          variants={fadeInUp}
          className="text-xl font-bold"
        >
          Work Experience
        </motion.h2>

        {/* Work Experience Cards */}
        {DATA.work.map((work, id) => (
          <motion.div
            key={work.company}
            variants={fadeInUp}
            custom={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <ResumeCard
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            />
          </motion.div>
        ))}
      </motion.section>

      <motion.section 
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Ensures repeat on scroll
      className="flex min-h-0 flex-col gap-y-3"
    >
      {/* Education Title */}
      <motion.h2 
        variants={fadeInUp}
        className="text-xl font-bold"
      >
        Education
      </motion.h2>

      {/* Education Cards */}
      {DATA.education.map((education, id) => (
        <motion.div
          key={education.school}
          variants={fadeInUp}
          custom={id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <ResumeCard
            href={education.href}
            logoUrl={education.logoUrl}
            altText={education.school}
            title={education.school}
            subtitle={education.degree}
            period={`${education.start} - ${education.end}`}
          />
        </motion.div>
      ))}
    </motion.section>


    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Repeat on scroll
      className="flex min-h-0 flex-col gap-y-3"
    >
      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-xl font-bold"
      >
        Skills
      </motion.h2>

          {/* Skill Badges */}
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <motion.div
                key={skill}
                variants={jellyBounce}
                custom={id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
              >
                <Badge key={skill}>{skill}</Badge>
              </motion.div>
            ))}
          </div>
        </motion.section>



          <motion.section 
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Repeats on every scroll
          className="space-y-12 w-full py-12"
        >
          <motion.div variants={fadeInUp}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple websites to complex web applications. 
                  Here are a few of my favorites.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                custom={id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }} // Ensures animation triggers on scroll
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>


        <section id="hackathons" className="space-y-12 w-full py-12">
      {/* Section Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
        className="flex flex-col items-center justify-center space-y-4 text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm"
        >
          Hackathons
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold tracking-tighter sm:text-5xl"
        >
          I like building things
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
        >
          During my time in university, I attended {DATA.hackathons.length}+
          hackathons. People from around the country would come together and
          build incredible things in 2-3 days. It was eye-opening to see the
          endless possibilities brought to life by a group of motivated and
          passionate individuals.
        </motion.p>
      </motion.div>

      {/* Hackathon List */}
      <ul className="relative space-y-6 border-l border-dashed pl-6">
        {DATA.hackathons.map((hackathon, id) => (
          <motion.li
            key={hackathon.title + hackathon.dates}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            custom={0.1 + id * 0.1}
            className="relative pl-6"
          >
            {/* Timeline Dot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.3, delay: 0.1 + id * 0.1 },
              }}
              className="absolute -left-3 top-2 h-4 w-4 rounded-full bg-purple-500 border-2 border-white"
            ></motion.div>

            {/* Hackathon Card */}
            <motion.div
              variants={fadeInUp}
              custom={0.2 + id * 0.1}
            >
              <HackathonCard
                title={hackathon.title}
                description={hackathon.description}
                location={hackathon.location}
                dates={hackathon.dates}
                image={hackathon.image}
                links={hackathon.links}
              />
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </section>


      <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Repeats on scroll
      className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12"
    >
      {/* Title & Description */}
      <motion.div
        variants={fadeUp}
        custom={0.1} // Delayed slightly
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="space-y-3"
      >
        <motion.div
          variants={fadeUp}
          custom={0.2}
          className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm"
        >
          Contact
        </motion.div>
        <motion.h2
          variants={fadeUp}
          custom={0.3}
          className="text-3xl font-bold tracking-tighter sm:text-5xl"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={0.4}
          className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
        >
          Want to chat? Just shoot me a DM{" "}
          <Link
            href={DATA.contact.social.X.url}
            className="text-blue-500 hover:underline"
          >
            with a direct question on Twitter
          </Link>{" "}
          and I&apos;ll respond whenever I can. I will ignore all soliciting.
        </motion.p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        variants={fadeUp}
        custom={0.5}
        className="container mx-auto p-8"
      >
        <ContactForm />
      </motion.div>
    </motion.section>

    </main>
  );
}
