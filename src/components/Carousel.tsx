import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { dotPulse } from "ldrs";
import type {} from "ldrs";

dotPulse.register();

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */

interface CarouselProps {
  images: string[];
  type: boolean;
}
export default function Carousel({ images, type }: CarouselProps) {
  const [interval, setInterval] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setLoading(true);
    setCurrentSlide(newSlide);
    setTimeout(() => {
      console.log("now");
      setLoading(false);
    }, 250);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setLoading(true);
    setCurrentSlide(newSlide);
    setTimeout(() => {
      console.log("now");
      setLoading(false);
    }, 250);
  };

  return (
    <div
      className={type ? "relative w-full overflow-hidden my-auto" : "relative"}
    >
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-4 m-auto text-5xl inset-y-1/2 cursor-pointer text-white z-10  w-[3rem] h-[3rem] border-1 rounded-full p-2 bg-slate-900 hover:bg-[#2e5355] transition-colors"
      />
      <div
        className={
          type
            ? "w-full aspect-auto flex overflow-hidden relative m-auto rounded-[1rem] "
            : "w-full aspect-auto flex overflow-hidden relative m-auto rounded-[1rem] shadow-xl"
        }
      >
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className={
            type
              ? "relative z-1 w-full h-[52rem]"
              : "relative z-1 w-full h-[48rem] border-2 rounded-[1rem]"
          }
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <div className="select-none" key={index}>
                  {loading ? (
                    <div className="flex justify-center items-center h-full mt-[16rem]">
                      <l-dot-pulse
                        size="60"
                        speed=""
                        color={type ? "white" : "black"}
                      ></l-dot-pulse>
                    </div>
                  ) : (
                    <Image
                      alt="..."
                      src={image}
                      className={
                        type ? "h-full bg-slate-900" : "h-full bg-[#F8F8F8] "
                      }
                      layout={"fill"}
                      objectFit="contain"
                    />
                  )}
                </div>
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-4 m-auto text-5xl inset-y-1/2 cursor-pointer text-white z-10  w-[3rem] h-[3rem] border-1 rounded-full p-2 bg-slate-900 hover:bg-[#2e5355] transition-colors"
      />

      <div className="relative flex justify-center p-4">
        {images.map((_, index) => {
          return (
            <div
              className={
                type
                  ? index === currentSlide
                    ? "h-1 w-6 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                    : "h-1 w-6 bg-gray-400 rounded-full mx-2 mb-2 cursor-pointer hover:bg-[#2e5355]"
                  : index === currentSlide
                  ? "h-1 w-6 bg-gray-400 rounded-full mx-2 mb-2 cursor-pointer hover:bg-[#2e5355]"
                  : "h-1 w-6 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
