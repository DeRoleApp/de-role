import { getCarousels } from '@/server/actions/carousels'
import PlacesCarousel from '../places-carousel'

const CarouselWrapper = async () => {
  const { data } = await getCarousels()
  // console.log(carousels)

  return (
    <section className="py-5">
      {data?.map((item) => <PlacesCarousel carousel={item} key={item.title} />)}
    </section>
  )
}

export default CarouselWrapper
