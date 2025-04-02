import CarouselWrapper from '@/components/carousel-wrapper'
import Card from './components/card'

const Home = () => {
  return (
    <>
      <section>
        <h1 className="mx-auto w-fit py-5 pb-10 text-center text-4xl">
          Qual é a boa de hoje?
        </h1>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Card
            imageSrc="/images/brinde.jpg"
            text="Um Barzinho para tomar bons drinks ou uma cerveja gelada"
          />
          <Card
            imageSrc="/images/jantar.jpg"
            text="Um restaurante para apreciar uma boa comida"
          />
          <Card
            imageSrc="/images/evento.jpg"
            text="Um evento para cantar e dançar como se não houvesse amanhã"
          />
        </div>
      </section>
      <CarouselWrapper />
    </>
  )
}

export default Home
