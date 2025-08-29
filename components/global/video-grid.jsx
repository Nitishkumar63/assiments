import { VideoCard } from "./video-card"

const items = [
  { title: "Understanding Your Birth Chart", views: "21k", duration: "15:32" },
  { title: "Understanding Your Birth Chart", views: "21k", duration: "15:32" },
  { title: "Understanding Your Birth Chart", views: "21k", duration: "15:32" },
  { title: "Understanding Your Birth Chart", views: "21k", duration: "15:32" },
  { title: "Understanding Your Birth", views: "21k", duration: "15:32" },
  { title: "Understanding Your Birth Chart", views: "21k", duration: "15:32" },
]

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((v, i) => (
        <VideoCard key={i} title={v.title} views={v.views} duration={v.duration} />
      ))}
    </div>
  )
}
