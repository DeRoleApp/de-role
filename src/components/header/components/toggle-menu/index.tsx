'use client'

import { MENU_ICON_ID, Menus } from '@/utils/constants'
import { useMenuStore } from '@/stores/menu'

type ToggleMenuProps = { type: Menus }

const ToggleMenu = ({ type }: ToggleMenuProps) => {
  const { toggleMenu, setType, isOpen, type: menuType } = useMenuStore()

  const isToggleEnabled = type === menuType || isOpen === false

  const handleClick = () => {
    isToggleEnabled && toggleMenu()
    setType(type)
  }

  return (
    <div
      id={MENU_ICON_ID}
      className="absolute top-0 size-full cursor-pointer bg-transparent"
      onClick={handleClick}
    />
  )
}

export default ToggleMenu
