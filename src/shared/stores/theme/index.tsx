import { THEME_COOKIE_NAME, Themes } from '@/shared/constants'
import { getCookie, setCookie } from 'cookies-next'
import { create } from 'zustand'

type UseThemeStoreProps = {
  theme: Themes
  setTheme: () => void
}

export const useThemeStore = create<UseThemeStoreProps>((set) => ({
  theme: getCookie(THEME_COOKIE_NAME) as Themes,
  setTheme: () =>
    set((store) => {
      const newTheme = store.theme === Themes.dark ? Themes.light : Themes.dark
      setCookie(THEME_COOKIE_NAME, newTheme)
      return { theme: newTheme }
    })
}))
