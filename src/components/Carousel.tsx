"use client";
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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
                    <div
                      className={
                        type
                          ? "text-center mt-[26rem]"
                          : "text-center mt-[22rem]"
                      }
                    >
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-slate-100"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
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
