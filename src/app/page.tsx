import { WavyBackground } from "@/ui/wavy-background";
import PostsLatestCarousel from "./_components/posts-latest-carousel";

export default async function Home() {
  return (
    <div className="pb-20">
      <WavyBackground
        className="pb-40"
        waveWidth={50}
        waveOpacity={0.5}
        colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
      >
        <div className="pt-20 pb-33 lg:pt-36">
          <p className="lg:text-center text-4xl lg:text-3xl font-bold">
            Welcome to G7 Dev, a website focused on exploring the concepts and
            technologies that make Networks, Infosec and Linux possible.
          </p>
        </div>
        <div className="pt-28">
          <PostsLatestCarousel />
        </div>
      </WavyBackground>
    </div>
  );
}
