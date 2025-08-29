import { NextResponse } from "next/server";

export async function GET() {
  const testimonials = [
    {
      title: "Unlock Your Cosmic Destiny",
      subtitle:
        "Book sessions with expert astrologers and discover your true path.",
      ctaText: "Book Now",
      ctaLink: "/book",
      imageUrl: "/image/man.svg",
      badges: [
        { label: "10k+ Sessions", icon: "Star" },
        { label: "Rated 4.9/5", icon: "ThumbsUp" },
        { label: "Verified Expert", icon: "ShieldCheck" },
      ],
    },
  ];

  return NextResponse.json(testimonials);
}
