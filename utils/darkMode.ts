import { useState, useEffect } from 'react'

// TODO: if dark-mode is not set, use prefers-color-scheme
export function useDarkMode() {
  const savedMode = localStorage.getItem('dark-mode')
  const [isDark, setIsDark] = useState(savedMode === 'true' ? true : false)
  const root = window.document.documentElement

  useEffect(() => {
    const root = window.document.documentElement
    isDark ? root.classList.add('dark') : root.classList.remove('dark')
  }, [isDark])

  const toggle = () => {
    localStorage.setItem('dark-mode', (!isDark).toString())
    root.classList.toggle('dark')
    setIsDark(!isDark)
  }

  const enable = () => {
    localStorage.setItem('dark-mode', 'true')
    root.classList.add('dark')
    setIsDark(true)
  }

  const disable = () => {
    localStorage.setItem('dark-mode', 'false')
    root.classList.remove('dark')
    setIsDark(false)
  }

  return { isDark, toggle, enable, disable }
}
