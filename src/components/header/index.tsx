import Image from 'next/image'
import Button from '../button'
import SearchInput from '../search-input'
import ToggleMenu from './components/toggle-menu'
import Menu from './components/menu'
import Link from 'next/link'
import { Menus } from '@/utils/constants'

const Header = () => {
  return (
    <header className="bg-dr-yellow fixed top-0 z-50 w-full">
      <div className="bg-dr-yellow relative z-20 flex h-14 items-center justify-between gap-5 px-4 font-bold shadow-lg">
        <div className="flex shrink-0">
          <Link href="/" className="contents">
            <picture className="relative aspect-[59/16] h-7 sm:h-9">
              <Image src="logos/preto.svg" alt="Logo de rolé" fill />
            </picture>
          </Link>
        </div>
        <div className="hidden w-full sm:flex lg:w-[550px]">
          <SearchInput />
        </div>
        <div className="flex h-8 shrink-0 items-center gap-3 text-xs md:gap-3">
          <Button
            text="Criar conta"
            color="white"
            withAnimation
            className="hidden md:block"
          />
          <Button
            text="Login"
            color="black"
            withAnimation
            className="hidden sm:block"
          />
          {/* TODO: componentizar os svgs para poder trocar de cor no server side */}
          <div className="relative">
            <Image
              src={'/icons/search.svg'}
              alt="search icon"
              width={22}
              height={22}
              className="sm:hidden"
            />
            <ToggleMenu type={Menus.search} />
          </div>
          <div className="relative">
            <Image
              src="icons/user.svg"
              alt="user icon"
              height={22}
              width={22}
              className="[&_svg]:fill-dr-yellow sm:hidden"
            />
            <ToggleMenu type={Menus.login} />
          </div>
          <div className="relative">
            <Image
              src="icons/menu.svg"
              alt="menu icon"
              height={22}
              width={22}
            />
            <ToggleMenu type={Menus.links} />
          </div>
        </div>
      </div>
      <Menu />
    </header>
  )
}

export default Header
