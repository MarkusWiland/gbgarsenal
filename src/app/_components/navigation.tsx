'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const routes = [
  { href: "/", title: "Hem", description: "Tillbaka till startsidan" },
  {
   
    title: "Arsenal Göteborg",
    description: "Lär känna föreningen Arsenal Göteborg",
    subRoutes: [
      { href: "/blimedlem", title: "Bli Medlem", description: "Bli en del av Arsenal Göteborg." },
      { href: "/styrelsen", title: "Styrelsen", description: "Lär känna vår styrelse." },
      { href: "/matchtraffar", title: "Matchträffar (cheers)", description: "Delta i våra matchträffar." },
      { href: "/information", title: "Information", description: "Information om oss" },
    ],
  },
  { href: "/podcast", title: "Podcast", description: "Lyssna på vår podcast om Arsenal." },
  { href: "/biljetter", title: "Biljettservice", description: "Boka biljetter och få information om matcher." },
  { href: "/kontakt", title: "Kontakta Oss", description: "Hör av dig till oss om du har frågor." },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {routes.map((route) => (
          <NavigationMenuItem key={route.title}>
            {/* Om en route har subRoutes, visa dropdown */}
            {route.subRoutes ? (
              <>
                <NavigationMenuTrigger>{route.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
                    {route.subRoutes.map((subRoute) => (
                      <ListItem
                        key={subRoute.href}
                        title={subRoute.title}
                        href={subRoute.href}
                        isActive={pathname === subRoute.href}
                      >
                        {subRoute.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              
              <Link href={route.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === route.href && "bg-accent text-accent-foreground"
                  )}
                >
                  {route.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; isActive?: boolean }
>(({ className, title, children, isActive, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            isActive
              ? "bg-accent text-accent-foreground"
              : "hover:bg-accent hover:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
