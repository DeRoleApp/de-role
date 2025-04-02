import { cn } from '@/shared/helpers'
import Button from '../button'
import Image from 'next/image'
import { ComponentProps } from 'react'

type SearchInputProps = ComponentProps<'div'>

const SearchInput = ({ className, ...props }: SearchInputProps) => {
  return (
    <div
      className={cn(
        'dark:bg-dr-black dark:text-dr-white bg-dr-white relative flex w-full rounded-full',
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
        <Image
          src={'/icons/search.svg'}
          alt="search icon"
          width={18}
          height={18}
        />
      </div>
      <input
        type="search"
        className="text-dr-black dark:text-dr-white dark:placeholder-dr-white/70 dark:border-r-dr-white/30 placeholder-dr-black/70 my-2 block w-full border-r py-1 pr-1 pl-10 text-xs font-medium outline-none"
        placeholder="Bares, Restaurantes, Eventos..."
        required
      />
      <input
        type="search"
        className="text-dr-black placeholder-dr-black/70 dark:placeholder-dr-white/70 dark:text-dr-white block w-full rounded-full border-none pr-24 pl-2 text-xs font-medium outline-none"
        placeholder="Localização"
        required
      />
      <Button
        text="Buscar"
        color="black"
        size={'xs'}
        withAnimation
        className="[&_.bubble]:bg-dr-yellow dark:[&_.bubble]:bg-dr-white dark:bg-dr-yellow text-dr-yellow bg-dr-black lg:hover:[&_span]:text-dr-black dark:text-dr-black absolute end-1.5 bottom-1.5"
      />
    </div>
  )
}

export default SearchInput
