import { Carousel as CarouselType } from '@/server/db/models/carousel'
import { ComponentProps } from 'react'
import * as Carousel from '@/components/carousel'

type CarouselProps = ComponentProps<'div'> & { carousel: CarouselType }

const PlacesCarousel = ({ carousel }: CarouselProps) => {
  return (
    <div className="py-4">
      <h2 className="-mb-[25px] text-lg font-bold sm:-mb-7">
        {carousel.title}
      </h2>
      <Carousel.Root options={{}} arrows>
        {carousel.items.map((item, index) => (
          <Carousel.Item
            className="flex cursor-pointer flex-col gap-0.5 md:gap-1"
            key={index}
          >
            <picture className="relative aspect-square size-[152px] overflow-hidden rounded-lg md:size-[212px]">
              <img
                src={item.imageUrl}
                className="absolute size-full object-cover transition-transform hover:scale-110"
                alt={`imagem do local: ${item.title}`}
              />
            </picture>
            <h3 className="text-sm font-bold">{item.title}</h3>
            <span className="text-xs">{item.description}</span>
          </Carousel.Item>
        ))}
      </Carousel.Root>
    </div>
  )
}

export default PlacesCarousel
