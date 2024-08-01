import { getLatestPosts } from "@/server/query";
import PostsLatestCarouselSlide from "./posts-latests-carousel-slide";

export default async function PostsLatestCarousel() {
  const posts = await getLatestPosts();

  return <PostsLatestCarouselSlide posts={posts} />;
}
