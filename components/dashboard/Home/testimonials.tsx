"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export function TestimonialsCarousel({
  items,
  className,
  autoplay = true,
  intervalMs = 3500,
}: {
  items: any;
  className?: string;
  autoplay?: boolean;
  intervalMs?: number;
}) {
  const settings = {
  dots: false,
  infinite: true,
  speed: 100,
  slidesToShow: 4, // default desktop
  slidesToScroll: 1,
  autoplay: autoplay,
  autoplaySpeed: intervalMs,
  responsive: [
    {
      breakpoint: 1536, // 2xl screens
      settings: { slidesToShow: 4 },
    },
    {
      breakpoint: 1280, // xl screens
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 1024, // lg screens
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768, // md tablets
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 640, // sm mobiles
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 480, // xs small phones
      settings: { slidesToShow: 1 },
    },
  ],
};

  return (
    <section
      className={cn("py-15", className)}
      aria-roledescription="carousel"
      aria-label="Client testimonials"

    >
      {/* Header */}
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 mb-2 bg-[#F3E8FF] backdrop-blur-sm rounded-md px-3 md:px-4 py-2 text-xs md:text-sm">
            <IoIosStar className="text-[12px] md:text-[15px]" />
            <span className="text-[#8200DB] font-medium">
              Client Testimonials
            </span>
          </div>
      
            <h1 className="text-pretty text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-[#1E2939]">What Our Clients</span>{" "}
            <span className="bg-gradient-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
              Say About Us
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-sm text-muted-foreground md:text-base">
           Discover how our astrological guidance has transformed lives across the globe, bringing clarity, purpose, and positive change to thousands of satisfied clients.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative mx-auto max-w-7xl px-4">
        <Slider {...settings}>
          {items.map((t:any) => (
            <div key={t.id} className="px-5"> {/* ✅ yaha gap add */}
              <article className="relative overflow-hidden h-[350px] rounded-sm border bg-card text-card-foreground shadow-sm">
                <div className="relative h-full w-full">
                  <div className="absolute inset-x-0  p-4 text-white">
                    <h3 className="text-lg font-semibold">{t.name}</h3>
                    <p className="mt-1 text-sm text-white font-bold">{t.feedback}</p>
                  </div>
                  <Image
                    width={400}
                    height={500}
                    src={t.photo}
                    alt={`${t.name} photo`}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
