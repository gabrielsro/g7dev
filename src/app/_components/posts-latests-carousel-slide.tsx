"use client";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import PostsLatestCarouselCard from "./posts-latest-carousel-card";

export default function PostsLatestCarouselSlide({ posts }: { posts: any }) {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  return (
    <div>
      <div className="max-w-sm flex justify-between px-2 pr-4">
        <p>Latest posts</p>
        <Link href="/blog" className="text-blue-500 font-semibold">
          Go to Blog
        </Link>
      </div>
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {posts.map((post: any, i: any) => {
            return (
              <CarouselItem key={i}>
                <div className="p-1">
                  <PostsLatestCarouselCard
                    title={post.title}
                    slug={post.slug}
                    coverPic={post.coverPic}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden md:grid" />
        <CarouselNext className="hidden md:grid" />
      </Carousel>
    </div>
  );
}
