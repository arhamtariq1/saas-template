"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export interface Gallery4Item {
  id: string
  title: string
  description: string
  href: string
  image: string
}

export interface Gallery4Props {
  title?: string
  description?: string
  items: Gallery4Item[]
}

export function Gallery4({
  title = "Projects",
  description = "Explore real SaaS product stories focused on growth, reliability, and measurable business outcomes.",
  items,
}: Gallery4Props) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!carouselApi) return

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev())
      setCanScrollNext(carouselApi.canScrollNext())
      setCurrentSlide(carouselApi.selectedScrollSnap())
    }

    updateSelection()
    carouselApi.on("select", updateSelection)
    return () => {
      carouselApi.off("select", updateSelection)
    }
  }, [carouselApi])

  return (
    <section className="relative py-6 md:py-10">
      <div className="mb-8 flex items-end justify-between gap-6 md:mb-12">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-400">Projects</p>
          <h2 className="text-3xl font-semibold text-zinc-100 md:text-5xl">{title}</h2>
          <p className="mt-4 text-sm text-zinc-300 md:text-base">{description}</p>
        </div>
        <div className="hidden shrink-0 gap-2 md:flex">
          <Button
            size="icon"
            variant="outline"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="h-10 w-10 rounded-full border-white/20 bg-white/[0.03] text-zinc-100 hover:bg-white/[0.07] disabled:pointer-events-auto"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            className="h-10 w-10 rounded-full border-white/20 bg-white/[0.03] text-zinc-100 hover:bg-white/[0.07] disabled:pointer-events-auto"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <Carousel
        setApi={setCarouselApi}
        opts={{
          align: "start",
          dragFree: true,
          breakpoints: {
            "(max-width: 768px)": {
              dragFree: true,
            },
          },
        }}
      >
        <CarouselContent className="-ml-0">
          {items.map((item) => (
            <CarouselItem key={item.id} className="basis-[86%] pl-0 pr-4 md:basis-1/2 lg:basis-1/3">
              <a href={item.href} className="group block h-full rounded-2xl">
                <article className="relative h-full min-h-[23rem] overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <h3 className="text-xl font-semibold text-zinc-100">{item.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-300">
                      {item.description}
                    </p>
                    <div className="mt-5 inline-flex items-center text-sm text-indigo-200 transition group-hover:translate-x-1">
                      Read case study <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </article>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-7 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${currentSlide === index ? "bg-indigo-300" : "bg-zinc-700 hover:bg-zinc-500"
              }`}
            onClick={() => carouselApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

