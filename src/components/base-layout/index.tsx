'use client'

import { useThemeStore } from '@/stores/theme'
import Footer from '../footer'
import Header from '../header'
import { Themes } from '@/utils/constants'
import { useEffect } from 'react'

type BaseLayoutProps = {
  initialTheme: Themes
  children: React.ReactNode
}

const BaseLayout = ({ initialTheme, children }: BaseLayoutProps) => {
  const { theme, setTheme } = useThemeStore()

  useEffect(() => {
    setTheme(initialTheme)
  }, [])

  return (
    <body className={theme || initialTheme}>
      <Header />
      <main className="relative mx-auto max-w-[1440px] px-4 pt-32 pb-10">
        {children}
      </main>
      <Footer />
    </body>
  )
}

export default BaseLayout
