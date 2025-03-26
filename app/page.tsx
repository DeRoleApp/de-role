import CarouselWrapper from '@/components/carousel-wrapper'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section>
        <h1 className="mx-auto w-fit py-5 pb-10 text-4xl">
          Qual é a boa de hoje?
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="relative h-72 w-72 cursor-pointer rounded-xl bg-red-400 transition-all hover:z-10 hover:scale-105 hover:rotate-0">
            <img
              src="https://media.istockphoto.com/id/1797024724/pt/foto/close-up-group-of-people-holding-beer-and-cheer-in-restaurant.jpg?s=612x612&w=0&k=20&c=S_oprGJgCg5L6wi9f52qlTR7h0drgfWyiaAWyAvcWrU=" // fill
              alt=""
              className="absolute size-full rounded-xl object-cover"
            />
            <div className="bg-dr-black/45 absolute flex size-full items-end justify-center rounded-xl p-4 text-center font-bold text-white">
              Um Barzinho para tomar bons drinks ou uma cerveja gelada
            </div>
          </div>
          <div className="relative h-72 w-72 cursor-pointer rounded-xl bg-red-400 transition-all hover:z-10 hover:scale-105 hover:rotate-0">
            <img
              src="https://media.istockphoto.com/id/500466008/pt/foto/carne-de-vaca.jpg?s=612x612&w=0&k=20&c=OtqC1tqJQcEkJg2ZcIFBmJ-zcK6iIeVjefToLUc_3-8="
              alt=""
              className="absolute size-full rounded-xl object-cover"
            />
            <div className="bg-dr-black/45 absolute flex size-full items-end justify-center rounded-xl p-4 text-center font-bold text-white">
              Um restaurante para apreciar uma boa comida
            </div>{' '}
          </div>
          <div className="relative h-72 w-72 cursor-pointer rounded-xl bg-red-400 transition-all hover:z-10 hover:scale-105 hover:rotate-0">
            <img
              src="https://media.istockphoto.com/id/841506898/pt/foto/enjoying-great-concert.jpg?s=612x612&w=0&k=20&c=khYQa3EIvQWWmSmwfqeLNqkn5yfHLA7YhLmgnfUPHfg="
              alt=""
              className="absolute size-full rounded-xl object-cover"
            />
            <div className="bg-dr-black/45 absolute flex size-full items-end justify-center rounded-xl p-4 text-center font-bold text-white">
              Um evento para cantar e dançar como se não houvesse amanhã{' '}
            </div>{' '}
          </div>
        </div>
      </section>
      <CarouselWrapper />
    </>
  )
}
