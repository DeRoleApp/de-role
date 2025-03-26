'use client'

import { MenuType, useMenuStore } from '@/shared/hooks/use-menu-store'

type ToggleMenuProps = { type: MenuType }

const ToggleMenu = ({ type }: ToggleMenuProps) => {
  const { toggleMenu, setType, isOpen, type: menuType } = useMenuStore()

  const isToggleEnabled = type === menuType || isOpen === false

  const handleClick = () => {
    isToggleEnabled && toggleMenu()
    setType(type)
  }

  return (
    <div
      className="absolute top-0 size-full cursor-pointer bg-transparent"
      onClick={handleClick}
    />
  )
}

export default ToggleMenu
