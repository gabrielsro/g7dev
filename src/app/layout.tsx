import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./_components/topnav";
import Footer from "./_components/footer";
import { PHProvider } from "./_analytics/providers";
import dynamic from "next/dynamic";

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G7 Dev",
  description: "Helping understand IT and InfoSec concepts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PHProvider>
        <body className={`${inter.className} dark bg-black`}>
          <PostHogPageView />
          <div className="h-screen grid grid-rows-[auto,1fr]">
            <TopNav />
            <div className="overflow-y-scroll min-h-full flex flex-col relative">
              <main className="relative flex-grow">{children}</main>
              <Footer />
            </div>
          </div>
        </body>
      </PHProvider>
    </html>
  );
}
