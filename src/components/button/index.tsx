import { cn } from '@/shared/helpers'
import { cva, type VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

const buttonVariants = cva(
  'flex items-center relative overflow-hidden rounded-full font-bold cursor-pointer',
  {
    variants: {
      size: {
        xs: 'h-7 px-5 [&_span]:text-xs',
        sm: 'h-9 px-4 [&_span]:text-sm'
      },
      color: {
        white: 'bg-dr-white',
        yellow: 'bg-dr-yellow',
        black: 'bg-dr-black'
      },
      withAnimation: {
        true: 'transition-transform duration-1500 hover:[&_.bubble]:translate-y-0 hover:[&_.bubble]:scale-250 hover:[&_.bubble]:ease-out [&_.bubble]:scale-150 [&_.bubble]:rounded-full [&_.bubble]:absolute [&_.bubble]:h-full [&_.bubble]:w-1/3 [&_.bubble]:translate-y-full [&_.bubble]:duration-600 [&_span]:relative [&_span]:z-10 [&_span]:transition-colors [&_span]:delay-250'
      }
    },
    defaultVariants: {
      color: 'yellow',
      size: 'xs'
    },
    compoundVariants: [
      {
        withAnimation: true,
        color: 'white',
        class:
          '[&_.bubble]:bg-dr-black text-dr-black lg:bg-dr-white lg:hover:[&_span]:text-dr-yellow'
      },
      {
        withAnimation: true,
        color: 'yellow',
        class:
          '[&_.bubble]:bg-dr-black text-dr-black lg:bg-dr-yellow lg:hover:[&_span]:text-dr-yellow'
      },
      {
        withAnimation: true,
        color: 'black',
        class:
          '[&_.bubble]:bg-dr-white text-dr-yellow lg:bg-dr-black lg:hover:[&_span]:text-dr-black'
      }
    ]
  }
)

type ButtonVariants = VariantProps<typeof buttonVariants>

type ButtonProps = ButtonVariants & ComponentProps<'button'> & { text: string }

const Button = ({
  text,
  color,
  size,
  withAnimation,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ color, size, withAnimation, className }))}
      {...props}
    >
      <span>{text}</span>
      {withAnimation && (
        <>
          <div className="absolute inset-0 hidden overflow-hidden pt-4 lg:block">
            <div className="bubble -left-[5%]"></div>
            <div className="bubble left-[30%] delay-100"></div>
            <div className="bubble left-[66%] delay-70"></div>
          </div>
        </>
      )}
    </button>
  )
}

export default Button
