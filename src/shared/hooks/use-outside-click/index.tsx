import { RefObject, useEffect, useCallback } from 'react'

const useOutsideClick = (
  ref: RefObject<HTMLElement | null>,
  callback: () => void
) => {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
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
