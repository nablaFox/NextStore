'use client'

import { Icon } from '@iconify/react'

export default function SearchProducts() {
  return (
    <div className="border-input bg-background ring-offset-background focus-visible:ring-ring flex flex h-9 w-full items-center justify-between gap-4 rounded-md border px-3 py-2 text-sm">
      <input
        className="placeholder:text-muted-foreground bg-transparent focus:outline-none"
        type="text"
        placeholder="Search for products..."
      />

      <Icon
        icon="radix-icons:magnifying-glass"
        fontSize={'19px'}
      />
    </div>
  )
}
