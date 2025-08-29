import { ServiceCard, type Accent } from "@/components/global/service-card";
import { IoIosStar } from "react-icons/io";

const services: { title: string; description: string; accent: Accent }[] = [
  {
    title: "Birth Chart Reading",
    description:
      "Complete natal chart analysis revealing your personality, strengths, and life path",
    accent: "amber",
  },
  {
    title: "Love & Relationships",
    description:
      "Compatibility analysis and guidance for romantic relationships and marriage",
    accent: "pink",
  },
  {
    title: "Career Guidance",
    description:
      "Professional path analysis and timing for career changes and opportunities",
    accent: "blue",
  },
  {
    title: "Vedic Astrology",
    description:
      "Traditional Indian astrology with precise calculations and remedial measures",
    accent: "blue",
  },
  {
    title: "Vastu Consultation",
    description:
      "Harmonizing your living and working spaces with cosmic energies",
    accent: "amber",
  },
  {
    title: "Gemstone Therapy",
    description:
      "Personalized gemstone recommendations for enhancing positive energies",
    accent: "pink",
  },
  {
    title: "Muhurta Selection",
    description:
      "Auspicious timing selection for important life events and ceremonies",
    accent: "blue",
  },
  {
    title: "Spiritual Guidance",
    description:
      "Meditation practices and spiritual development based on your cosmic blueprint",
    accent: "amber",
  },
];

export default function Services() {
  return (
    <main className="relative">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-amber-100 via-rose-50 to-amber-100"
      />
      {/* Soft horizontal band to mimic screenshot's center fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-48 bg-white/50 blur-2xl"
      />
      {/* Soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-8 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-200/40 blur-3xl"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-[7px] bg-[#F3E8FF] px-3 py-2 text-xs ">
            <IoIosStar className="text-[12px] md:text-[15px]" />
            <span className="text-[#8200DB] font-semibold">
              Astrological Services
            </span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <h1 className="text-pretty text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-[#1E2939]">Comprehensive</span>{" "}
            <span className="bg-gradient-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
              Cosmic Services
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl font-reguler text-balance text-sm leading-6 text-[#4A5565] leading-[29px] sm:text-base sm:leading-7">
            Discover a wide range of astrological services designed to
            illuminate your path, enhance your well-being, and guide you towards
            your highest potential.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              description={s.description}
              accent={s.accent}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
