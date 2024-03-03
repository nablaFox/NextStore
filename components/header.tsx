'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import SearchProducts from './searchProducts'
import { Switch } from '@/components/ui/switch'
import { Icon } from '@iconify/react'

// TODO: make it more global
const routes = [
  { slug: '/', name: 'Home' },
  { slug: '/', name: 'All' },
  { slug: '/', name: 'Collections' },
  { slug: '/', name: 'Merch' },
]

const darkModeIcon = 'material-symbols:dark-mode-outline-rounded'
const lightModeIcon = 'material-symbols:light-mode-outline-rounded'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // TODO: make headerLink component
  // TODO: make theme switcher a component
  // TODO: make logo a component
  return (
    <header className="background-blur sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            className="mr-6 text-xl font-bold"
          >
            Logo
          </Link>
          <div className="flex items-center gap-6 text-sm text-primary/70">
            {routes.map((route) => (
              <Link
                href={route.slug}
                key={route.name}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <SearchProducts />
          <div className="flex items-center gap-3 before:h-6 before:w-px before:bg-border before:content-[''] after:h-6 after:w-px after:bg-border after:content-['']">
            <Switch
              checked={theme === 'light'}
              onCheckedChange={() =>
                setTheme(theme === 'light' ? 'dark' : 'light')
              }
              icon={theme == 'light' ? lightModeIcon : darkModeIcon}
            />
          </div>
          <Icon
            className="cursor-pointer"
            fontSize={'35px'}
            icon="ic:outline-shopping-bag"
          />
        </div>
      </div>
    </header>
  )
}
