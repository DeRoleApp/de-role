'use client'

import SearchInput from '@/components/search-input'
import { cn } from '@/shared/helpers'
import { useMenuStore } from '@/stores/menu'
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
    <SearchInput className="[&_button]:end-1.5 [&_button]:bottom-[6px]" />
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

  useOutsideClick(menuRef, () => {
    console.log(isOpen)
    isOpen && toggleMenu()
  })

  return (
    <div
      className={cn(
        'dark:bg-dr-yellow bg-dr-black dark:text-dr-black text-dr-yellow absolute bottom-2 left-0 z-10 flex h-12 w-full items-center gap-8 px-4 text-xs font-bold transition-all duration-300 ease-linear [&_a]:cursor-pointer [&_a]:transition-all [&_a]:hover:text-sm',
        isOpen && '-bottom-12 delay-200 duration-[2.3s] ease-[var(--bouncing)]'
      )}
      ref={menuRef}
    >
      {menuMapper[type]}
    </div>
  )
}

export default Menu
