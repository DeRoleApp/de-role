import Image from 'next/image'
import Link from 'next/link'
import Button from '../button'

const Header = () => {
  return (
    <header className="flex h-12 w-full items-center justify-between px-4 font-bold md:justify-around">
      <div className="flex">
        <div className="md:hidden">=</div>
        <Image
          src="logos/preto-amarelo.svg"
          alt="Logo de rolé"
          height={32}
          width={113}
        />
      </div>
      <div className="hidden items-center justify-center gap-8 text-sm md:flex">
        <Link href={'/promotions'} className="cursor-pointer">
          Promoções
        </Link>
        <Link href={''} className="cursor-pointer">
          Fazer Check-in
        </Link>
        <Link href={''} className="cursor-pointer">
          Para Empresas
        </Link>
      </div>
      <div className="flex h-8 items-center gap-2 text-xs md:gap-4">
        <Button text="Criar conta" color="white" withAnimation />
        <Button text="Login" color="black" withAnimation />
        <div>...</div>
      </div>
    </header>
  )
}

export default Header
