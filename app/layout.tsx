import { Montserrat } from 'next/font/google'
import './globals.css'
import { cn } from '@/utils/helpers'
import { cookies } from 'next/headers'
import BaseLayout from '@/components/base-layout'
import { THEME_COOKIE_NAME, Themes } from '@/utils/constants'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
})

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const themeCookie = cookieStore.get(THEME_COOKIE_NAME)?.value as Themes
  const theme = themeCookie || Themes.dark

  return (
    <html lang="en" className={cn('antialiased', montserrat.className)}>
      <BaseLayout initialTheme={theme}>{children}</BaseLayout>
    </html>
  )
}
