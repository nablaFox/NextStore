'use client'

import { useDarkMode } from '@/utils/darkMode'
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
  const { isDark, toggle: toggleDark } = useDarkMode()

  return (
    <header className="background-blur border-border/40 sticky top-0 z-50 w-full border-b">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            className="mr-6 text-xl font-bold"
          >
            Logo
          </Link>
          <div className="text-primary/70 flex items-center gap-6 text-sm">
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
          <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-6 before:w-px before:content-[''] after:h-6 after:w-px after:content-['']">
            <Switch
              checked={!isDark}
              onCheckedChange={toggleDark}
              icon={!isDark ? lightModeIcon : darkModeIcon}
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
