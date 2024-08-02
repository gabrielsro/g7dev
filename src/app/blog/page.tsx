import { getPosts } from "@/server/query";
import BlogCard from "./_components/blogCard";

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div className="min-h-screen pb-10">
      <h1 className="text-3xl font-semibold py-8">Blog</h1>
      <div className="grid place-content-center">
        <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap">
          {posts.map((post: any) => {
            return (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                coverPic={post.coverPic}
                introduction={post.introduction}
                createdAt={post.createdAt}
                slug={post.slug}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
