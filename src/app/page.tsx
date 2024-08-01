import { WavyBackground } from "@/ui/wavy-background";

export default async function Home() {
  return (
    <WavyBackground
      className=""
      waveWidth={50}
      waveOpacity={0.5}
      colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
    >
      <div className="pt-20 lg:pt-36">
        <p className="lg:text-center text-4xl lg:text-3xl font-bold">
          Welcome to G7 Dev, a website focused on exploring the concepts and
          technologies that make Networks, Infosec and Linux possible.
        </p>
      </div>
    </WavyBackground>
  );
}
