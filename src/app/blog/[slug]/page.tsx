import { getPost } from "@/server/query";
import dateFormatter from "@/lib/utils/dateFormatter";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  return (
    <div className="min-h-screen">
      <div className="pt-6 pb-4">
        <h1 className="text-3xl font-semibold lg:font-bold lg:text-4xl">
          {post.title}
        </h1>
      </div>
      <div className="pb-4">{dateFormatter(post.createdAt)}</div>
      <div className="">
        <img
          src={post.coverPic}
          alt=""
          className="w-full max-h-post-banner object-cover object-center"
        />
      </div>
      <div className="pt-4">
        <p>{post.introduction}</p>
      </div>
    </div>
  );
}
