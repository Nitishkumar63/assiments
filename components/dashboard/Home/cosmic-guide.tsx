import type React from "react";
import { Globe2, Star, Users2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { IoIosStar } from "react-icons/io";

type StatCardProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
  tint: "purple" | "blue" | "amber";
};

function StatCard({ icon, value, label, tint }: StatCardProps) {
  const map = {
    purple: { tile: "bg-[#F3E8FF] text-[#8200DB]", value: "text-[#9810FA]" },
    blue: { tile: "bg-[#DBEAFE] text-[#155DFC]", value: "text-[#155DFC]" },
    amber: { tile: "bg-[#FEF9C2] text-[#D08700]", value: "text-[#FF9345]" },
  } as const;

  const c = map[tint];

  return (
    <div className="flex flex-col items-center text-center space-y-2">
      <div
        className={cn(
          "size-12 flex items-center font-reguler justify-center",
          c.tile
        )}
        aria-hidden="true"
      >
          {icon}
      </div>
      <div className={cn("text-2xl font-semibold", c.value)}>{value}</div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function CosmicGuide() {
  return (
    <section
      className={cn(
        "relative py-5 sm:py-10 lg:py-20"
      )}
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-[7px] bg-[#F3E8FF] px-3 py-2 text-xs ">
            <IoIosStar className="text-[12px] md:text-[15px]" />
            <span className="text-[#8200DB] font-semibold">
              Master Rajesh Sharma — Vedic Astrologer & Spiritual Guide
            </span>
          </div>
        </div>

        {/* Heading + Copy */}
        <div className="mt-6 text-center">
          <h1 className="text-pretty text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-[#1E2939]">Meet Your</span>{" "}
            <span className="bg-gradient-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
              Cosmic Guide
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl font-reguler text-balance text-sm leading-6 text-[#4A5565] leading-[29px] sm:text-base sm:leading-7">
            With over 15 years of experience in Vedic Astrology, I have
            dedicated my life to helping individuals discover their true
            potential through the ancient wisdom of the stars. My journey began
            in the sacred temples of India, where I studied under renowned
            masters of astrological sciences.
          </p>
        </div>
        <section className="py-7 flex flex-col items-center gap-10">
          {/* Tags Row */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-[7px] bg-[#F3E8FF] text-[#8200DB] px-2.5 py-2 fontt-medium text-[11px] ">
              15+ Years Experience
            </span>
            <span className="rounded-[7px] bg-[#DBEAFE] text-[#1447E6] px-2.5 fontt-medium py-2 text-[11px] ">
              Certified Astrologer
            </span>
            <span className="rounded-[7px] bg-[#FEF9C2] text-[#A65F00] px-2.5 fontt-medium py-2 text-[11px] ">
              Vedic Expert
            </span>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <StatCard
              icon={<Users2 className="size-6" />}
              value="2000+"
              label="Happy Clients Guided"
              tint="purple"
            />
            <StatCard
              icon={<Star className="size-6" />}
              value="4.9★"
              label="Average Rating"
              tint="blue"
            />
            <StatCard
              icon={ <Globe2 className="size-6" />}
              value="25+"
              label="Countries Served"
              tint="amber"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
