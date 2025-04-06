'use client'

import { ComponentProps, KeyboardEvent, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import { cn } from '@/utils/helpers'
import Image from 'next/image'
import Icon from '../icon'

type CarouselRootProps = ComponentProps<'div'> & {
  options?: EmblaOptionsType
  arrows?: boolean
}

type CarouselItemProps = ComponentProps<'div'>

type ArrowsProps = ComponentProps<'div'> & {
  callbacks: {
    prev: () => void
    next: () => void
  }
}

const Root = ({
  children,
  className,
  arrows,
  options,
  ...props
}: CarouselRootProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    ...options
  })

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      event.preventDefault()

      event.key === 'ArrowLeft' && scrollPrev()
      event.key === 'ArrowRight' && scrollNext()
    },
    [scrollPrev, scrollNext]
  )

  return (
    <div
      className={cn(
        'embla relative size-full overflow-hidden outline-0',
        className
      )}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      {...props}
    >
      {arrows && <Arrows callbacks={{ prev: scrollPrev, next: scrollNext }} />}
      <div className="embla_viewport" ref={emblaRef}>
        <div
          className={cn('embla__container flex size-full gap-4')}
          role="group"
          aria-roledescription="slide"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

const Item = ({ children, className, ...props }: CarouselItemProps) => (
  <div
    className={cn('embla__slide min-w-0 shrink-0 grow-0', className)}
    {...props}
  >
    {children}
  </div>
)

const Arrows = ({ callbacks, ...props }: ArrowsProps) => (
  <div className="flex justify-end gap-2 pb-3" {...props}>
    <button className="embla__prev" onClick={callbacks.prev}>
      <Icon name="arrow" className="size-5 rotate-180 sm:size-6" />
    </button>
    <button className="embla__next" onClick={callbacks.next}>
      <Icon name="arrow" className="size-5 sm:size-6" />
    </button>
  </div>
)

const Carousel = { Root, Item }

export default Carousel
