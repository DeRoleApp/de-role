import { cn } from '@/shared/helpers'
import Button from '../button'
import Image from 'next/image'
import { ComponentProps } from 'react'

type SearchInputProps = ComponentProps<'div'>

const SearchInput = ({ className, ...props }: SearchInputProps) => {
  return (
    <div className={cn('relative w-full', className)} {...props}>
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
        className="bg-dr-white text-dr-black block w-full rounded-full border border-gray-300 px-4 py-3 ps-10 text-xs shadow outline-none"
        placeholder="Procure por bares, restaurantes..."
        required
      />
      <Button
        text="Buscar"
        color="yellow"
        size={'xs'}
        withAnimation
        className="absolute end-1.5 bottom-1.5"
      />
    </div>
  )
}

export default SearchInput
