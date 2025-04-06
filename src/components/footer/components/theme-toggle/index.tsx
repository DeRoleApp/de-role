'use client'

import { Themes } from '@/utils/constants'
import { cn } from '@/utils/helpers'
import { useThemeStore } from '@/stores/theme'

const ThemeToggle = () => {
  const { theme, setTheme } = useThemeStore()

  return (
    <button
      onClick={() => setTheme()}
      className="dark:bg-dr-black grid size-12 place-items-center items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-500"
    >
      <div
        className={cn(
          'col-[1/1] row-[1/1] scale-100 rotate-0 transition-transform duration-500',
          theme === Themes.light && 'scale-0 rotate-[360deg]'
        )}
      >
        <svg
          height="28"
          width="28"
          fill="var(--color-dr-yellow)"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
        </svg>
      </div>
      <div
        className={cn(
          'col-[1/1] row-[1/1] scale-100 rotate-0 transition-transform duration-500',
          theme === Themes.dark && 'scale-0 rotate-[360deg]'
        )}
      >
        <svg
          height="28"
          width="28"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
    </button>
  )
}

export default ThemeToggle
