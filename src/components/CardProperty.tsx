import Link from "next/link";

import Image from "next/image";

import prop1 from "../app/assets/property/prop1.png";
import favorite from "../app/assets/icons/heart-favo.svg";
import food from "../app/assets/icons/propcardVeg.png";
import gender from "../app/assets/icons/propcardBoysGirls.png";
import occupation from "../app/assets/icons/propcardStudents.png";

export function PropCard({
  genders,
  categories,
  foodOptions,
  propImage,
  propName,
  address,
  price,
  roommateCount,
}) {
  // function to assing the stars
  // function Star({ value }: { value: number }) {
  //   if (value < 1)
  //     return (
  //       <svg
  //         className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
  //         aria-hidden="true"
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="currentColor"
  //         viewBox="0 0 22 20"
  //       >
  //         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  //       </svg>
  //     );
  //   else
  //     return (
  //       <svg
  //         className="w-4 h-4 text-[#2B67F6] ms-1"
  //         aria-hidden="true"
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="currentColor"
  //         viewBox="0 0 22 20"
  //       >
  //         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  //       </svg>
  //     );
  // }

  return (
    <div className="grid grid-cols-4 p-12 bg-white bg-opacity-55 rounded-[24px] shadow-lg">
      <div className="col-span-1">
        <div className="relative">
          <Image
            src={propImage}
            alt=".."
            className="aspect-square rounded-[12px]"
            width={700}
            height={700}
          />
          <div className="absolute ml-2 bottom-4">
            <div className="font-semibold text-white text-sm">
              {roommateCount} Roommates
            </div>
            <div className="text-white text-xs opacity-65">Names of People</div>
          </div>
        </div>
      </div>

      {/* Details */}

      <div className="col-span-2 ml-6">
        {/* Name  */}
        <div className="text-xl font-semibold">{propName}</div>
        {/* Location  */}
        <div className="text-sm mt-2">{address}</div>
        {/* Features  */}
        <div className="grid grid-rows-3 grid-flow-col gap-y-1 mt-2">
          <div className="flex gap-2 mx-3 ">
            <Image
              src={food}
              alt=""
              className="rounded-[24px] w-[24px] h-[24px]"
            />
            <div className="text-[0.55rem]/[0.7rem] my-auto">{foodOptions}</div>
          </div>
          <div className="flex gap-2 mx-3">
            <Image
              src={gender}
              alt=""
              className="rounded-[24px] w-[24px] h-[24px]"
            />
            <div className="text-[0.55rem]/[0.7rem] my-auto">{genders}</div>
          </div>
          <div className="flex gap-2 mx-3">
            <Image
              src={occupation}
              alt=""
              className="rounded-[24px] w-[24px] h-[24px]"
            />
            <div className="text-[0.55rem]/[0.7rem] my-auto">{categories}</div>
          </div>
          {/* <div className="flex gap-2 mx-3 hidden">
            <Image
              src={prop1}
              alt=""
              className="rounded-[24px] w-[24px] h-[24px] my-auto"
            />
            <div className="text-[0.55rem]/[0.7rem] my-auto">
              Students/ Working professionals
            </div>
          </div>
          <div className="flex gap-2 mx-3 hidden">
            <Image
              src={prop1}
              alt=""
              className="rounded-[24px] w-[24px] h-[24px]"
            />
            <div className="text-[0.55rem]/[0.7rem] my-auto">
              Students/ Working professionals
            </div>
          </div> */}
        </div>

        {/* Contact  */}

        <div className="grid grid-cols-2 mx-4 gap-4 mt-4">
          <button className="p-1 rounded-[10px] bg-[#a8c1fc] font-semibold">
            Contact Owner
          </button>
          <button className="p-1 rounded-[10px] bg-[#96E98B] font-semibold">
            Number
          </button>
        </div>

        {/* Rating */}
        {/* <div className="flex gap-4 mt-3">
          <div className="">{rating}</div>

         

          <div className="flex items-center">
            <Star value={rating / 1} />
            <Star value={rating / 2} />
            <Star value={rating / 3} />
            <Star value={rating / 4} />
            <Star value={rating / 5} />
          </div>

          <div className="text-[0.7rem] my-auto">(42 Reviews)</div>
        </div> */}
      </div>

      {/* Pricing */}
      <div className="col-span-1">
        {/* <div className="font-bold mb-auto text-end h-1/2">
          <input
            type="checkbox"
            id={`favorite${uid}`}
            value=""
            className="hidden peer"
          />
          <label
            htmlFor={`favorite${uid}`}
            className="inline-flex items-center justify-between p-2 text-gray-500 bg-white bg-opacity-55 border-2 border-gray-200 rounded-[200px] cursor-pointer peer-checked:border-black hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 "
          >
            <div className="block">
              <Image src={favorite} alt="..." className="w-8" />
            </div>
          </label>
        </div> */}
        <div className="flex flex-col-reverse h-full">
          <div className="font-bold mt-auto text-end ">
            {/* Input for cost */}
            Rs {price} <span className="text-xs font-normal">/month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
