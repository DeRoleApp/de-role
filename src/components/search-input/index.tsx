import { cn } from '@/utils/helpers'
import Button from '../button'
import Image from 'next/image'
import { ComponentProps } from 'react'
import Icon from '../icon'

type SearchInputProps = ComponentProps<'div'>

const SearchInput = ({ className, ...props }: SearchInputProps) => {
  return (
    <div
      className={cn(
        'bg-dr-white relative flex h-7 w-full rounded-full lg:h-8',
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
        <Icon name="search" className="fill-dr-black size-[18px]" />
      </div>
      <input
        type="search"
        className="text-dr-black placeholder-dr-black/70 my-1 block w-full py-1 pr-1 pl-10 text-xs font-medium outline-none lg:my-2"
        placeholder="Busque o rolé de hoje"
        required
      />
      {/* <input
        type="search"
        className="text-dr-black placeholder-dr-black/70 block w-full rounded-full border-none pr-24 pl-2 text-xs font-medium outline-none"
        placeholder="Localização"
        required
      /> */}
      {/* <Button
        text="Buscar"
        color="yellow"
        size={'xs'}
        withAnimation
        className="absolute end-1.5 bottom-1.5"
      /> */}
    </div>
  )
}

export default SearchInput
