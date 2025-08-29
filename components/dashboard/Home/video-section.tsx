import { Button } from "@/components/ui/button";
import { VideoGrid } from "@/components/global/video-grid";
import { Play, PlayCircle } from "lucide-react";
import { MdVideoCameraBack } from "react-icons/md";

export default function VideoSection() {
  return (
    <main className="bg-[#F1F5FF]">
      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-30">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF9C2] px-3 py-2 text-xs ">
              <Play size={15} />
              <span className="text-[#A65F00] font-semibold">
                Video Content
              </span>
            </div>
          </div>

         <h1 className="text-pretty text-3xl mb-4 opacity-70 font-bold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
              Video Wisdom
            </span>
          </h1>

          <p className=" max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
         Explore the mysteries of astrology through our comprehensive video library,<br/> 
         featuring detailed explanations and practical guidance for your spiritual journey.
          </p>

          {/* Actions */}
         <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
      <Button className="rounded-sm bg-indigo-600 px-20 font-bold py-2 text-white hover:bg-indigo-700">
        <MdVideoCameraBack className="h-4 w-4" aria-hidden />
        Trending Video
      </Button>
      <Button className="rounded-sm bg-indigo-600 px-20 py-2 font-bold text-white hover:bg-indigo-700">
        <PlayCircle className=" h-4 w-4" aria-hidden />
        Popular Video
      </Button>
    </div>
        </div>

        {/* Grid */}
        <div className="mt-8 md:mt-10">
          <VideoGrid />
        </div>
      </section>
    </main>
  );
}
