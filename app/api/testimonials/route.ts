import { NextResponse } from "next/server"

export async function GET() {
  const testimonials = [
    {
      id: "1",
      name: "Emma Wilson",
      photo: "/image/woman.jpg",
      feedback: "Amazing experience, brought clarity and peace to my life.",
    },
    {
      id: "2",
      name: "David Smith",
      photo: "/image/woman.jpg",
      feedback: "Very professional and insightful guidance. Highly recommend!",
    },
    {
      id: "3",
      name: "Sophia Brown",
      photo: "/image/woman.jpg",
      feedback: "I feel more confident and inspired after the session.",
    },
    {
      id: "4",
      name: "Michael Johnson",
       photo: "/image/woman.jpg",
      feedback: "A truly transformative experience. Thank you so much!",
    },
     {
      id: "5",
      name: "Michael Johnson",
       photo: "/image/woman.jpg",
      feedback: "A truly transformative experience. Thank you so much!",
    },
     {
      id: "6",
      name: "Michael Johnson",
       photo: "/image/woman.jpg",
      feedback: "A truly transformative experience. Thank you so much!",
    },
     {
      id: "7",
      name: "Michael Johnson",
       photo: "/image/woman.jpg",
      feedback: "A truly transformative experience. Thank you so much!",
    },
      {
      id: "8",
      name: "Michael Johnson",
       photo: "/image/woman.jpg",
      feedback: "A truly transformative experience. Thank you so much!",
    },
      {
      id: "9",
      name: "Michael Johnson",
       photo: "/image/woman.jpg",
      feedback: "A truly transformative experience. Thank you so much!",
    },
      {
      id: "10",
      name: "Michael Johnson",
       photo: "/image/woman.jpg",
      feedback: "A truly transformative experience. Thank you so much!",
    },
      {
      id: "11",
      name: "Michael Johnson",
       photo: "/image/woman.jpg",
      feedback: "A truly transformative experience. Thank you so much!",
    },
      {
      id: "12",
      name: "Michael Johnson",
       photo: "/image/woman.jpg",
      feedback: "A truly transformative experience. Thank you so much!",
    },
      {
      id: "13",
      name: "Michael Johnson",
       photo: "/image/woman.jpg",
      feedback: "A truly transformative experience. Thank you so much!",
    },
  ]

  return NextResponse.json(testimonials)
}
