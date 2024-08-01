import dateFormatter from "@/lib/utils/dateFormatter";
import Link from "next/link";

export default function BlogCard({
  id,
  title,
  coverPic,
  introduction,
  createdAt,
  slug,
}: {
  id: number;
  title: string;
  coverPic: string;
  introduction: string;
  createdAt: string;
  slug: string;
}) {
  return (
    <div
      key={id}
      className="relative max-w-sm border rounded-lg bg-gray-800 border-gray-700"
    >
      <Link href={`/blog/${slug}`}>
        <div className="w-blog-card-w h-52">
          <img
            className="rounded-t-lg h-52 w-full object-cover"
            src={coverPic ?? "/blogCard-placeholder.avif"}
            alt=""
          />
        </div>
      </Link>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="pb-14 font-normal text-gray-700 dark:text-gray-400">
          {introduction}
        </p>
        <div className="absolute bottom-0 left-0 flex w-full justify-between items-end px-5 pb-5">
          <div>{dateFormatter(createdAt)}</div>
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
