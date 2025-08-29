import { Card, CardContent } from "@/components/ui/card"
import { Clock, Eye } from "lucide-react"
import Image from "next/image"

type Props = {
  title: string
  views: string
  duration: string
}

export function VideoCard({ title, views, duration }: Props) {
  return (
    <Card className="overflow-hidden p-0 rounded-sm bg-gray-500 border-slate-200 bg-white shadow-sm">
      <div className="relative">
        {/* Thumbnail placeholder */}
        <Image src="/image/soft-neutral-video-thumbnail.png" width={40} height={40} alt="Video thumbnail" className="h-40 w-full object-cover" />
        <span
          className="absolute right-2 top-2 rounded bg-white/90 px-1.5 py-0.5 text-[10px] font-medium text-slate-700"
          aria-label={`Duration ${duration}`}
        >
          {duration}
        </span>
      </div>

      <CardContent className="p-4">
        <h3 className="text-sm font-medium text-slate-800">{title}</h3>

        <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" aria-hidden />
            {views}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            15:32
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
