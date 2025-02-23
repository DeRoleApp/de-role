import Button from '../button'
import Image from 'next/image'

const SearchInput = () => {
  return (
    <div className="relative">
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
        id="default-search"
        className="bg-dr-white block w-full rounded-full border border-gray-300 px-4 py-3 ps-10 text-sm shadow outline-none"
        placeholder="Procure por bares, restaurantes em......"
        required
      />
      <Button
        text="Buscar"
        color="yellow"
        size={'sm'}
        withAnimation
        className="absolute end-1.5 bottom-1.5"
      />
    </div>
  )
}

export default SearchInput
