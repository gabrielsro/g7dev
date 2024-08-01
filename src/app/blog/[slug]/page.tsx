import Link from "next/link";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { getPost } from "@/server/query";
import dateFormatter from "@/lib/utils/dateFormatter";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return (
    <div className="min-h-screen lg:px-10">
      <div className="pt-3 absolute left-1 lg:left-4 lg:pt-4">
        <Link href="/blog">
          <img
            src="/icons/backButton.svg"
            alt="Go back"
            className="w-10 h-10"
          />
        </Link>
      </div>
      <div className="pt-16 pb-4 lg:pt-4">
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
      <div className="pt-10 italic text-lg">
        <p>{post.introduction}</p>
      </div>
      <div className="pt-10 pb-10 text-lg">
        <BlocksRenderer content={post.content} />
      </div>
    </div>
  );
}
