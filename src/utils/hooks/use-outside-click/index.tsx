import { MENU_ICON_ID } from '@/utils/constants'
import { RefObject, useEffect, useCallback } from 'react'

const useOutsideClick = (
  ref: RefObject<HTMLElement | null>,
  callback: () => void
) => {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      const target = event?.target as HTMLElement

      if (
        (ref.current && ref.current.contains(event.target as Node)) ||
        target?.id === MENU_ICON_ID
      ) {
        return
      }

      callback()
    },
    [callback, ref]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [handleClick])
}

export default useOutsideClick
