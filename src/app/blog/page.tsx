import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; // Utility for conditional classes

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage({ searchParams }: { searchParams: { query?: string; category?: string } }) {
  const posts = await getBlogPosts();

  // Extract all unique categories
  const categories = [...new Set(posts.map((post) => post.metadata.category).filter(Boolean))];

  // Extract search & filter params
  const searchQuery = searchParams.query?.toLowerCase() || "";
  const activeCategory = searchParams.category || "";

  // Filter posts based on search query and category
  const filteredPosts = posts.filter(
    (post) =>
      (!searchQuery ||
        post.metadata.title.toLowerCase().includes(searchQuery) ||
        post.metadata.summary.toLowerCase().includes(searchQuery)) &&
      (!activeCategory || post.metadata.category === activeCategory)
  );

  return (
    <section className="container mx-auto px-4 py-12">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Blog
        </h1>
      </BlurFade>

      {/* Search Bar */}
      <form className="flex justify-center mb-6">
        <input
          type="text"
          name="query"
          placeholder="Search blog posts..."
          defaultValue={searchQuery}
          className="w-full md:w-1/2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="ml-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-gray-700">
          Search
        </button>
      </form>

      {/* Category Filters */}
      <div className="flex justify-center gap-3 flex-wrap mb-6">
        <Link
          href="/blog"
          className={cn(
            "px-4 py-2 rounded-full text-sm font-semibold border transition",
            !activeCategory
              ? "bg-slate-800 text-white"
              : "border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          )}
        >
          All
        </Link>
        {categories.map((category) => (
          <Link
            key={category}
            href={`/blog?category=${encodeURIComponent(category)}`}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-semibold border transition",
              activeCategory === category
                ? "bg-blue-500 text-white"
                : "border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            )}
          >
            {category}
          </Link>
        ))}
      </div>

      {/* Blog List */}
      <div className="flex flex-col space-y-6">
        {filteredPosts.length > 0 ? (
          filteredPosts
            .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
            .map((post, id) => (
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
                      <h1 className="text-4xl font-light tracking-tight text-gray-900 dark:text-white sm:text-2xl">
                          Blog
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
                    <span
                      className="mt-4 inline-block text-slate-500 dark:text-slate-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Read More →
                    </span>
                    </CardContent>
                  </Card>
                </Link>
              </BlurFade>
            ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">No blog posts found.</p>
        )}
      </div>
    </section>
  );
}
