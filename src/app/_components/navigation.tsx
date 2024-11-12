'use client'

import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import NavButton from "./nav-button"

const routes = [
  {
    href: "/",
    label: "Overview"
  },
  {
    href: "/",
    label: "Accounts"
  },
  {
    href: "/",
    label: "Transatcions"
  },
  {
    href: "/",
    label: "Aboyut"
  },
  {
    href: "/",
    label: "Contact"
  },
]

export default function Navigation() {
  const pathname = usePathname()
  return (
    <nav className="flex items-center gap-2">
      {routes.map((route) => (
        <NavButton key={route.href} href={route.href} label={route.label} isActive={pathname === route.href}/>
      ))}
      <div>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
        <ClerkLoading>
          <p>laddar...</p>
        </ClerkLoading>
      </div>
    </nav>
  )
}
