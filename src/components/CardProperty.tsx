"use client";
import Link from "next/link";

import Image from "next/image";

import { useState } from "react";

import prop1 from "../app/assets/property/prop1.png";
import favorite from "../app/assets/icons/heart-favo.svg";
import food from "../app/assets/icons/propcardVeg.png";
import gender from "../app/assets/icons/propcardBoysGirls.png";
import occupation from "../app/assets/icons/propcardStudents.png";

export function PropCard({
  id,
  genders,
  categories,
  foodOptions,
  propImages,
  propName,
  address,
  price,
  roommateCount,
  contact,
}) {
  console.log(id);
  const [showModal, setShowModal] = useState(false);
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
    <div className="bg-white bg-opacity-55 rounded-[24px] shadow-lg">
      <div className="relative aspect-[4/1] overflow-hidden">
        <Image
          src={propImages[0]}
          alt=".."
          className="rounded-[24px]"
          width={10000}
          height={10000}
        />
        <div className="absolute ml-2 top-12 left-12">
          {/* Name  */}
          <div className="text-4xl font-bold text-white">{propName}</div>
        </div>
        <div className="absolute ml-2 bottom-4 left-12">
          <div className="font-semibold text-white text-sm">
            {roommateCount} Roommate(s)
          </div>
        </div>
      </div>

      {/* Details */}

      <div className="grid grid-cols-2 px-12 py-6">
        <div className="">
          {/* Location  */}
          <div className="text-xl font-semibold mt-2">{address}</div>
          {/* Features  */}
          <div className="grid grid-rows-3 grid-flow-col gap-y-1 mt-2">
            <div className="flex gap-2">
              <Image
                src={food}
                alt=""
                className="rounded-[24px] w-[24px] h-[24px]"
              />
              <div className="text-[0.7rem]/[0.7rem] my-auto">
                {foodOptions}
              </div>
            </div>
            <div className="flex gap-2">
              <Image
                src={gender}
                alt=""
                className="rounded-[24px] w-[24px] h-[24px]"
              />
              <div className="text-[0.7rem]/[0.7rem] my-auto">{genders}</div>
            </div>
            <div className="flex gap-2">
              <Image
                src={occupation}
                alt=""
                className="rounded-[24px] w-[24px] h-[24px]"
              />
              <div className="text-[0.7rem]/[0.7rem] my-auto">{categories}</div>
            </div>
          </div>
        </div>
        <div className="my-auto">
          <div className="grid grid-cols-2 gap-4 mt-4 mb-2">
            <button
              className="p-1 rounded-[10px] bg-[#a8c1fc] font-semibold"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Contact Owner
            </button>
            {showModal ? (
              <>
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white bg-opacity-70">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                        <h3 className="text-3xl font=semibold">{propName}</h3>
                        <button
                          className="bg-transparent border-0 text-black float-right"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="grid text-black opacity-7 h-8 w-8 text-xl bg-gray-400 py-0 rounded-full justify-center my-auto mx-auto">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                              className="h-4 w-4 mt-2"
                            >
                              <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="relative p-6 flex-auto">
                        <div className="">Name of Owner: {contact.name}</div>
                        <div className="">Whatsapp: {contact.number}</div>
                        <div className="">Email: {contact.email}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}

            <button className="p-1 rounded-[10px] bg-[#96E98B] font-semibold">
              <Link
                href={{
                  pathname: "/PropDetails",
                  query: {
                    id: id,
                  },
                }}
                id={id}
              >
                More Details
              </Link>
            </button>
          </div>
          <div className="flex flex-col-reverse">
            <div className="font-bold mt-auto text-end ">
              {/* Input for cost */}
              Rs {price} <span className="text-xs font-normal">/month</span>
            </div>
          </div>
        </div>

        {/* Contact  */}
      </div>

      {/* Pricing */}
    </div>
  );
}
