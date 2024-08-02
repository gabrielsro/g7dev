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
    <div className="grid place-content-center">
      <div className="max-w-sm flex justify-end pr-2">
        <Link
          href="/blog"
          className="text-blue-500 font-semibold flex items-center gap-1"
        >
          Go to Blog
          <img
            src="/icons/arrow-right.svg"
            alt="Right arrow"
            className="w-5 h-5"
          />
        </Link>
      </div>
      <Carousel
        opts={{ align: "center", loop: true }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full max-w-sm flex"
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
