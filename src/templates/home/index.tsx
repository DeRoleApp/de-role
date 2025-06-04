import CarouselWrapper from '@/templates/home/components/carousel-wrapper'

function Services() {
  const items = [
    { title: 'Bar', image: '/bar.png' },
    { title: 'Restaurante', image: '/restaurante.png' },
    { title: 'Eventos', image: '/evento.png' },
    { title: 'Música ao vivo', image: '/ao-vivo.png' }
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-4 md:gap-6 md:p-6">
      {items.map(({ title, image }) => (
        <div
          key={title}
          className="flex w-32 cursor-pointer flex-col items-center rounded-2xl bg-white p-2 shadow-md transition hover:scale-105 md:w-36 md:p-4"
        >
          <img
            src={'images' + image}
            alt={title}
            className="mb-2 size-14 object-contain md:size-20"
          />
          <span className="text-center text-xs font-medium text-nowrap md:text-sm">
            {title}
          </span>
        </div>
      ))}
    </div>
  )
}

const Home = () => {
  return (
    <>
      <section>
        <Services />
        {/* <h1 className="mx-auto w-fit py-5 pb-10 text-center text-4xl">
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
        </div> */}
      </section>
      <CarouselWrapper />
    </>
  )
}

export default Home
