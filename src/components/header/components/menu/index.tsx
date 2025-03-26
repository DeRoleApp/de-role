'use client'

import SearchInput from '@/components/search-input'
import { cn } from '@/shared/helpers'
import { useMenuStore } from '@/shared/hooks/use-menu-store'
import useOutsideClick from '@/shared/hooks/use-outside-click'
import Link from 'next/link'
import { useRef } from 'react'

const menuMapper = {
  links: (
    <>
      <Link href={''}>Promoções</Link>
      <Link href={''}>Check-in</Link>
      <Link href={''}>Para Empresas</Link>
    </>
  ),
  search: (
    <SearchInput className="[&_button]:end-1 [&_button]:bottom-[3px] [&_input]:py-2" />
  ),
  login: (
    <>
      <Link href={''}>Login</Link>
      <Link href={''}>Criar conta</Link>
    </>
  )
}

const Menu = () => {
  const { isOpen, type, toggleMenu } = useMenuStore()
  const menuRef = useRef<HTMLDivElement>(null)

  // useOutsideClick(menuRef, () => isOpen && toggleMenu())

  return (
    <div
      className={cn(
        'bg-dr-yellow text-dr-black absolute bottom-2 left-0 z-10 flex h-12 w-full items-center gap-8 px-4 text-xs font-bold transition-all duration-300 ease-linear [&_a]:cursor-pointer [&_a]:transition-all [&_a]:hover:text-sm',
        isOpen && '-bottom-12 delay-200 duration-[2.3s] ease-[var(--bouncing)]'
      )}
      ref={menuRef}
    >
      {menuMapper[type]}
    </div>
  )
}

export default Menu
