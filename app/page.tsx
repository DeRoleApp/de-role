import SearchInput from '@/components/search-input'
import Image from 'next/image'

export default function Home() {
  const filterList = [
    { label: 'Pesquisar tudo', icon: 'icons/location.svg' },
    { label: 'Bares', icon: 'icons/drink.svg' },
    { label: 'Restaurantes', icon: 'icons/cutlery.svg' },
    { label: 'Festas e Eventos', icon: 'icons/microphone.svg' }
  ]

  return (
    <section className="mx-auto flex w-fit flex-col items-center py-10">
      <h1 className="pb-10 text-3xl font-bold md:text-5xl">
        Qual é a boa de hoje?
      </h1>
      <div className="flex w-full justify-around pb-4 text-xs md:text-sm">
        {filterList.map(({ label, icon }) => (
          <button
            key={label}
            className="flex cursor-pointer items-center gap-1.5"
          >
            <Image src={icon} alt={`${label} icon`} width={17} height={17} />
            <span>{label}</span>
          </button>
        ))}
      </div>
      <form className="w-full lg:w-[700px]">
        <label
          htmlFor="default-search"
          className="sr-only mb-2 text-sm font-medium"
        >
          Search
        </label>
        <SearchInput />
      </form>
    </section>
  )
}
