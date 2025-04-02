import Image from 'next/image'

type CardProps = {
  imageSrc: string
  text: string
}

const Card = ({ imageSrc, text }: CardProps) => {
  return (
    <div className="bg-dr-yellow relative h-28 w-full cursor-pointer rounded-xl transition-all hover:z-10 hover:scale-105 hover:rotate-0 sm:size-72">
      <Image
        src={imageSrc}
        fill
        alt=""
        className="absolute size-full rounded-xl object-cover"
      />
      <div className="bg-dr-black/45 absolute flex size-full items-end justify-center rounded-xl p-4 text-center font-bold text-white">
        {text}
      </div>
    </div>
  )
}

export default Card
