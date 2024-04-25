/* eslint-disable react/jsx-key */
"use client";
import { useState, useEffect, ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Loader } from "../../components/Loader";
import { doc, getDocs, collection, query } from "firebase/firestore";
import { db, storage } from "@/firebase";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropCard } from "../../components/CardProperty";
import { DocumentData } from 'firebase/firestore';
import search from "../assets/icons/searchbar.png";

export default function Booking() {
  //This page will only be used to fill data and using filters

  let amount = 0;
  const [loading, setLoading] = useState(true);
  const [pgs, setPgs] = useState<DocumentData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const startTime = new Date(); // Record start time

        const querySnapshot = await getDocs(collection(db, "PG"));
        const pgData = querySnapshot.docs.map((doc) => doc.data());
        setPgs(pgData);
        // so that loader is displayed for atleast 1 secs
        const endTime = new Date(); // Record end time
        const elapsedTime = endTime.getTime() - startTime.getTime(); // Calculate elapsed time

        if (elapsedTime < 1000) {
          setTimeout(() => {
            setLoading(false);
          }, 1000 - elapsedTime);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  const handleSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredPgs = pgs.filter(
    (pg) =>
      pg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pg.addrShort.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(pgs);
  return (
    <main className="bg-white bg-opacity-55 text-black flex justify-center">
      <div className="bg-[#F0F0F0]  max-w-[1440px]">
        <hr className="w-screen border-0" />
        <div className="bg-white">
          <Navbar />
        </div>
        <hr className="w-screen border-0" />
        {/* Search bar */}
        <div className="min-w-full">
          <form className="w-4/5 mx-auto py-12">
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                <Image
                  src={search}
                  alt="..."
                  className="mx-auto my-auto w-4 h-4"
                />
              </div>
              <input
                type="search"
                id="search"
                onChange={handleSearchChange}
                name="searchbar"
                value={searchQuery}
                className="block w-full p-4 ps-16 placeholder:text-gray-800 border-black border-4 rounded-[300px] "
                placeholder="Search for PGs"
                required
              />
              <button
                type="submit"
                className="text-white absolute rounded-[200px] end-2 bottom-1.5 bg-[#064749] hover:bg-[#274b4d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm py-4 px-12 "
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="grid grid-cols-12">
            {/* Filters section */}
            <div className="col-span-3">
              <div className="mx-4 p-4 bg-white bg-opacity-55">
                <form action="">
                  <div className="text-3xl">Filters</div>

                  <div className="text-bold mt-4">
                    {" "}
                    Select room sharing type
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-4">
                    <div className="flex flex-row-reverse mr-auto gap-2">
                      <label htmlFor="room-sharing-single">Single</label>
                      <input
                        type="checkbox"
                        name="room-sharing-single"
                        id="room-sharing-single"
                        className="w-6 h-6"
                      />
                    </div>

                    <div className="flex flex-row-reverse mr-auto gap-2">
                      <label htmlFor="room-sharing-double">Double</label>
                      <input
                        type="checkbox"
                        name="room-sharing-double"
                        id="room-sharing-double"
                        className="w-6 h-6"
                      />
                    </div>

                    <div className="flex flex-row-reverse mr-auto gap-2">
                      <label htmlFor="room-sharing-triple">Triple</label>
                      <input
                        type="checkbox"
                        name="room-sharing-triple"
                        id="room-sharing-triple"
                        className="w-6 h-6"
                      />
                    </div>

                    <div className="flex flex-row-reverse mr-auto gap-2">
                      <label htmlFor="room-sharing-more">Triple+</label>
                      <input
                        type="checkbox"
                        name="room-sharing-more"
                        id="room-sharing-more"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>

                  <hr className="my-8" />

                  <div className="text-bold mt-4"> Select your gender</div>
                  <div className="mt-4 grid grid-cols-1 gap-4">
                    <div className="flex flex-row-reverse mr-auto gap-2">
                      <label htmlFor="gender-mal">Male</label>
                      <input
                        type="checkbox"
                        name="gender-mal"
                        id="gender-mal"
                        className="w-6 h-6"
                      />
                    </div>

                    <div className="flex flex-row-reverse mr-auto gap-2">
                      <label htmlFor="gender-fem">Female</label>
                      <input
                        type="checkbox"
                        name="gender-fem"
                        id="gender-fem"
                        className="w-6 h-6"
                      />
                    </div>

                    <div className="flex flex-row-reverse mr-auto gap-2">
                      <label htmlFor="gender-non">Not Say</label>
                      <input
                        type="checkbox"
                        name="gender-non"
                        id="gender-non"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>

                  <hr className="my-8" />

                  <div className="text-bold mt-4"> Select food type</div>
                  <div className="mt-4 grid grid-cols-1 gap-4">
                    <div className="flex flex-row-reverse mr-auto gap-2">
                      <label htmlFor="food-non">Non Veg</label>
                      <input
                        type="checkbox"
                        name="food-non"
                        id="food-non"
                        className="w-6 h-6"
                      />
                    </div>

                    <div className="flex flex-row-reverse mr-auto gap-2">
                      <label htmlFor="food-veg">Veg</label>
                      <input
                        type="checkbox"
                        name="food-veg"
                        id="food-veg"
                        className="w-6 h-6"
                      />
                    </div>

                    <div className="flex flex-row-reverse mr-auto gap-2">
                      <label htmlFor="food-both">Both</label>
                      <input
                        type="checkbox"
                        name="food-both"
                        id="food-both"
                        className="w-6 h-6"
                      />
                    </div>

                    <div className="flex flex-row-reverse mr-auto gap-2">
                      <label htmlFor="food-jain">Jain</label>
                      <input
                        type="checkbox"
                        name="food-jain"
                        id="food-jain"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>

                  <hr className="my-8" />

                  <div className="text-bold mt-4">
                    Select your maximum budget
                  </div>
                  <div className="flex mb-4">
                    <label
                      htmlFor="currency-input"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only"
                    ></label>
                    <div className="relative w-full mt-6">
                      <input
                        type="number"
                        id="currency-input"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border-2  border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter amount"
                        // value={amount}
                        required
                      />
                    </div>
                  </div>

                  <div className="relative mb-6">
                    <label htmlFor="labels-range-input" className="sr-only">
                      Labels range
                    </label>
                    <input
                      id="labels-range-input"
                      type="range"
                      // value={amount}
                      min="100"
                      max="1500"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-sm text-gray-500  absolute start-0 -bottom-6">
                      ₹500
                    </span>
                    <span className="text-sm text-gray-500 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                      ₹2500
                    </span>
                    <span className="text-sm text-gray-500 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                      ₹5000
                    </span>
                    <span className="text-sm text-gray-500 absolute end-0 -bottom-6">
                      ₹7500
                    </span>
                  </div>

                  <hr className="my-8" />

                  <div className="text-bold mt-4">Security deposit</div>
                  <div className="mt-4 grid grid-cols-1 gap-4">
                    <div className="flex flex-row-reverse mr-auto gap-2">
                      <label htmlFor="deposit-0.5">15 Days</label>
                      <input
                        type="checkbox"
                        name="deposit-0.5"
                        id="deposit-0.5"
                        className="w-6 h-6"
                      />
                    </div>

                    <div className="flex flex-row-reverse mr-auto gap-2">
                      <label htmlFor="deposit-1">1 Month</label>
                      <input
                        type="checkbox"
                        name="deposit-1"
                        id="deposit-1"
                        className="w-6 h-6"
                      />
                    </div>

                    <div className="flex flex-row-reverse mr-auto gap-2">
                      <label htmlFor="deposit-2">2 Months</label>
                      <input
                        type="checkbox"
                        name="deposit-2"
                        id="deposit-2"
                        className="w-6 h-6"
                      />
                    </div>

                    <div className="flex flex-row-reverse mr-auto gap-2">
                      <label htmlFor="deposit-3">3 Months</label>
                      <input
                        type="checkbox"
                        name="deposit-3"
                        id="deposit-3"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>

                  <hr className="my-8" />
                </form>
              </div>
            </div>

            {/* Property display */}
            <div className="col-span-9">
              <div className="ml-auto mr-12 grid grid-cols-1 gap-4">
                {filteredPgs.length === 0 ? (
                  <p>No PG found!</p>
                ) : (
                  filteredPgs.map((pg, index) => {
                    index = index + 1;
                    return (
                      <PropCard
                        key={index}
                        id={pg.id}
                        propName={pg.title}
                        address={pg.addrShort}
                        price={pg.price}
                        propImages={pg.images}
                        categories={pg.categories}
                        foodOptions={pg.food}
                        roommateCount={pg.roommateCount}
                        genders={pg.genders}
                        contact={pg.contact}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>
        )}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}
