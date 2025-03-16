import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BLUR_FADE_DELAY = 0.04;

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <section className="container mx-auto px-4 py-12">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Blog
        </h1>
      </BlurFade>

      {/* Blog List */}
      <div className="flex flex-col space-y-6">
        {sortedPosts.length > 0 ? (
          sortedPosts.map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <Card className="flex flex-col md:flex-row items-center md:items-start overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.03] transition duration-300 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                  {/* Image Section */}
                  {post.metadata.image && (
                    <div className="relative w-full md:w-64 h-48 md:h-56 flex-shrink-0">
                      <Image
                        src={post.metadata.image}
                        alt={post.metadata.title}
                        fill
                        className="object-cover rounded-l-2xl"
                      />
                    </div>
                  )}
                  {/* Content Section */}
                  <CardContent className="p-6 flex flex-col justify-between w-full">
                    {/* Category Badge */}
                    {post.metadata.category && (
                      <Badge className="mb-2 bg-gradient-to-r from-blue-500 to-slate-800 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                        {post.metadata.category}
                      </Badge>
                    )}
                    {/* Title */}
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {post.metadata.title}
                    </h1>
                    {/* Date */}
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {new Date(post.metadata.publishedAt).toLocaleDateString()}
                    </p>
                    {/* Summary */}
                    <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                      {post.metadata.summary}
                    </p>
                    {/* Read More Button */}
                    <span className="mt-4 inline-block text-slate-500 dark:text-slate-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read More →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </BlurFade>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">
            No blog posts found.
          </p>
        )}
      </div>
    </section>
  );
}
