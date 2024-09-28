// components/Carousel.tsx
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

export function CarouselComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const slides = [
    {
      id: 1,
      imageUrl:"/tech1.webp",
      altText:"tech1",
    },
    {
      id: 2,
      imageUrl:"/tech2.avif",
      altText:"tech2",
    },
    {
      id: 3,
      imageUrl:"/tech3.jpeg",
      altText:"tech3",
    },
    {
      id: 4,
      imageUrl:"/tech1.webp",
      altText:"tech4",
    },
    {
      id: 5,
      imageUrl:"/tech2.avif",
      altText:"tech5",
    },
    {
      id: 6,
      imageUrl:"/tech3.jpeg",
      altText:"tech6",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [emblaApi]);

  return (
    <div className="embla w-full relative overflow-hidden " ref={emblaRef}>
      <div className="embla__container flex ">
        {slides.map((slide) => (
          <div className="embla__slide flex-[0_0_100%]" key={slide.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center p-6">
                  <img
                    src={slide.imageUrl}
                    alt={slide.altText}
                    className="w-full sm:max-w-[600px] h-auto rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
      <BsArrowLeftCircleFill size={30} className="absolute left-3 top-1/2" onClick={() => emblaApi && emblaApi.scrollPrev()} />
      <BsArrowRightCircleFill size={30} className="absolute right-3 top-1/2" onClick={() => emblaApi && emblaApi.scrollNext()} />
    </div>
  );
}
