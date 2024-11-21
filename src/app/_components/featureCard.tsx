import { cn } from "@/lib/utils"

type FeatureCardProps = {
  title: string,
  description: string,
  children?: React.ReactNode,
  className?: string
}
export default function FeatureCard({title, description,children, className}: FeatureCardProps) {
  return (
    <div className={cn("bg-neutral-400 border border-black/10 p-6 rounded-3xl", className)}>
      <div className="aspect-video">
        {children}
      </div>
      <div>
        <h3 className="text-3xl font-medium mt-6">{title}</h3>
        <p className="text-black/50 mt-2">
          {description}
        </p>
      </div>
    </div>
  )
}