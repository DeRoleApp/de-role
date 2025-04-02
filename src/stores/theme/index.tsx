import { THEME_COOKIE_NAME, Themes } from '@/utils/constants'
import { getCookie, setCookie } from 'cookies-next'
import { create } from 'zustand'

type UseThemeStoreProps = {
  theme: Themes
  setTheme: (theme?: Themes) => void
}

export const useThemeStore = create<UseThemeStoreProps>((set) => ({
  theme: getCookie(THEME_COOKIE_NAME) as Themes,
  setTheme: (theme) =>
    set((store) => {
      const isDark = store.theme === Themes.dark
      const newTheme = theme || (isDark ? Themes.light : Themes.dark)

      setCookie(THEME_COOKIE_NAME, newTheme)
      return { theme: newTheme }
    })
}))
