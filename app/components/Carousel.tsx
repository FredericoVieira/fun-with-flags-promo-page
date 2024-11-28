"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

type Props = {
  images: StaticImageData[];
};

export default function Carousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] md:h-[500px] h-[250px] m-auto pb-16 md:px-4 px-0 group">
      <div className="w-full h-full relative bg-white rounded-xl overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          priority={currentIndex === 0}
          className="object-contain"
          fill
        />

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-10">
          <ChevronLeft onClick={prevSlide} size={30} />
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-10">
          <ChevronRight onClick={nextSlide} size={30} />
        </div>
      </div>

      <div className="flex justify-center py-4">
        {images.map((_, slideIndex) => (
          <Circle
            key={slideIndex}
            size={12}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer my-1 mx-2`}
            fill={
              currentIndex === slideIndex
                ? "var(--primary)"
                : "var(--foreground)"
            }
            strokeWidth={0}
          />
        ))}
      </div>
    </div>
  );
}
