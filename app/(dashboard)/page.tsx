import React from "react"
import Hero from "@/components/dashboard/Home/hero"
import LimitedTimeOffer from "@/components/dashboard/Home/offer"
import Services from "@/components/dashboard/Home/services"
import VideoSection from "@/components/dashboard/Home/video-section"
import { CosmicGuide } from "@/components/dashboard/Home/cosmic-guide"
import { TestimonialsCarousel } from "@/components/dashboard/Home/testimonials"
import { Testimonials } from "@/server/testimonials"
import { HeroApi } from "@/server/hero"

export default async function Home() {
  const testimonials = await Testimonials() 
  const heroFetch = await HeroApi()
  // console.log(heroFetch)

  return (
    <>
      <Hero hero={heroFetch}/>
      <CosmicGuide />
      <Services />
      <VideoSection />
      <TestimonialsCarousel items={testimonials} /> 
      <div className="mb-15">
        <LimitedTimeOffer />
      </div>
    </>
  )
}
