import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from "next/link"
type NavButtonProps = {
  href: string,
  label: string,
  isActive: boolean
}
export default function NavButton({href, label, isActive}: NavButtonProps) {
  return (
    <Button asChild className={cn("w-full lg:w-auto justify-between font-normal border-none focus-visible:ring-offset-0 outline-none",
      isActive ? "bg-white/10" : "bg-transparent"
    )}>
      <Link href={href}>
      {label}
      </Link>
    </Button>
  )
}
