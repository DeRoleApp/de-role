'use client'

import { useThemeStore } from '@/shared/stores/theme'
import Footer from '../footer'
import Header from '../header'
import { Themes } from '@/shared/constants'

type BaseLayoutProps = {
  initialTheme: Themes
  children: React.ReactNode
}

const BaseLayout = ({ initialTheme, children }: BaseLayoutProps) => {
  const { theme } = useThemeStore()

  return (
    <body className={theme || initialTheme}>
      <Header />
      <main className="relative px-4 pt-14 pb-10">{children}</main>
      <Footer />
    </body>
  )
}

export default BaseLayout
