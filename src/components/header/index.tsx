'use client'

import Image from 'next/image'
import Button from '../button'
import SearchInput from '../search-input'
import ToggleMenu from './components/toggle-menu'
import Menu from './components/menu'
import Link from 'next/link'
import { Menus } from '@/utils/constants'
import Icon from '../icon'
import dynamic from 'next/dynamic'

const ThemeToggle = dynamic(() => import('@/components/theme-toggle'), {
  ssr: false
})

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="relative">
        <div className="absolute z-20 flex h-28 w-full items-center justify-between gap-5 bg-[url('/images/rj-12.jpg')] bg-contain px-4 pb-4">
          <div className="flex shrink-0 pr-5">
            <Link href="/" className="contents">
              <picture className="relative aspect-[59/16] h-6 sm:h-8 lg:h-9">
                <Image src="logos/branco.svg" alt="Logo de rolé" fill />
              </picture>
            </Link>
          </div>
          <div className="hidden w-[400px] sm:flex lg:w-[550px]">
            <SearchInput />
          </div>
          <div className="text-dr-white hidden items-center justify-between gap-5 px-3 text-xs font-bold text-nowrap lg:flex [&_a]:transition-transform [&_a]:hover:scale-110">
            <a>Promoções</a>
            <a>Fazer Check-in</a>
            <a>Para Empresas</a>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-end gap-2 text-xs">
            <Button
              text="Login"
              color="white"
              withAnimation
              className="hidden sm:block"
            />
            <div className="relative sm:hidden">
              <Icon name="search" className="fill-dr-white size-6 sm:hidden" />
              <ToggleMenu type={Menus.search} />
            </div>
            <div className="relative sm:hidden">
              <Icon name="user" className="fill-dr-white size-6 sm:hidden" />
              <ToggleMenu type={Menus.login} />
            </div>
            <ThemeToggle />
            <div className="relative lg:hidden">
              <Icon name="menu" className="fill-dr-white size-6" />
              <ToggleMenu type={Menus.links} />
            </div>
          </div>
        </div>

        {/* <Menu /> */}
        <div className="to-dr-white dark:to-dr-black absolute top-[110px] left-0 size-5 w-full bg-gradient-to-b from-[#e7ba87]"></div>
      </div>
    </header>
  )
}

export default Header
