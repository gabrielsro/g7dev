import { WavyBackground } from "@/ui/wavy-background";
import PostsLatestCarousel from "./_components/posts-latest-carousel";
import Socials from "./_components/socials";

export default async function Home() {
  return (
    <div className="pb-20">
      <div className="relative">
        <WavyBackground>
          <div className="pt-20 pb-20 lg:pb-40 lg:pt-36 max-w-horizontal-limit">
            <p className="lg:text-center text-4xl lg:text-3xl font-bold">
              Welcome to G7 Dev, a website focused on exploring the concepts and
              technologies that make Networks, Infosec and Linux possible.
            </p>
          </div>
        </WavyBackground>
      </div>
      <PostsLatestCarousel />
      <div className="pt-14 md:pt-24">
        <Socials />
      </div>
    </div>
  );
}
