import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type Accent = "blue" | "amber" | "pink"

const accents: Record<Accent, { ring: string; gradient: string }> = {
  blue: {
    ring: "ring-blue-200",
    gradient: "from-blue-500 via-sky-400 to-blue-500",
  },
  amber: {
    ring: "ring-amber-200",
    gradient: "from-amber-500 via-amber-400 to-amber-500",
  },
  pink: {
    ring: "ring-pink-200",
    gradient: "from-pink-500 via-rose-400 to-pink-500",
  },
}

interface ServiceCardProps {
  title: string
  description: string
  accent?: Accent
  className?: string
}

export function ServiceCard({ title, description, accent = "blue", className }: ServiceCardProps) {
  const a = accents[accent]
  return (
    <Card
      className={cn(
        "h-full rounded-2xl border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
    >
      <CardContent className="px-8">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <div
            className={cn("inline-flex size-12 mb-5 items-center justify-center rounded-sm ring-1", a.ring)}
            aria-hidden="true"
          >
            <div className={cn("size-8 rounded-lg bg-gradient-to-br", a.gradient)} />
          </div>

          <h3 className="text-sm font-semibold mb-5 text-foreground">{title}</h3>
      
           <p className="text-xs  text-slate-600">{description}</p>
      
        </div>
      </CardContent>
    </Card>
  )
}

