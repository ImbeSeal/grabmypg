/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

import hostelpg from "../app/assets/hostel-bg.jpg";
import hostelpg4 from "../app/assets/bg-s4.png";
import hostelpg5 from "../app/assets/bg-s5.jpg";
import img1 from "../app/assets/s2-1.jpg";
import img2 from "../app/assets/s2-2.jpg";
import img3 from "../app/assets/s2-3.png";
import img4 from "../app/assets/s2-4.jpg";

import {
  imgcard1,
  imgcard2,
  imgcard3,
  imgcard4,
  search,
} from "../app/assets/icons/index";

import Card from "./Card";

export default function Hero() {
  return (
    <div className="bg-[#F0F0F0]">
      {/* Slide 1 */}

      <div
        id="search-bar"
        className="flex flex-col items-center justify-between"
      >
        {/* Search bar and hostel pictures */}
        <div className="relative w-full">
          <div className="content-center">
            {/* Search bar */}
            <div className="absolute top-12 w-full">
              <div className="w-3/5 mx-auto border-[0.25rem] border-black rounded-full bg-white flex flex-row justify-between items-center">
                <div className="text-lg text-slate-800 cursor-default ml-6">
                  Want to select a pg fit for you?
                </div>
                <Link
                  href="./Booking"
                  className="text-white rounded-full bg-[#064749] hover:bg-[#274b4d] font-medium text-sm py-4 px-12 m-1 "
                >
                  Start Booking
                </Link>
              </div>
            </div>
            <div className="-z-30">
              <div className="overflow-hidden w-full">
                {/* <img
                  src={hostelpg}
                  alt="Hostel Room"
                  className="aspect-[1.88] "
                /> */}
                <Image
                  src={hostelpg}
                  alt="Hostel Room"
                  className="aspect-[1.88] "
                />
              </div>
            </div>
            <div className="absolute w-[28rem] left-[-2rem] bottom-[4rem]">
              <div className="flex m-auto px-16 py-8 rounded-3xl bg-white flex-col ">
                <span className="text-4xl font-bold">Get the</span>
                <span className="text-4xl font-bold">Right PG For You</span>
                <span className="mt-4">
                  Looking for the perfect Paying Guest accommodation? Your
                  search ends here! GrabmyPG is your go-to platform for seamless
                  room bookings in prime locations.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="mt-[12rem] mx-[6rem]">
        <div className="rounded-[3rem] w-full overflow-hidden grid grid-cols-2">
          <div className="grid grid-cols-2">
            <Image src={img1} alt="...." className="h-[13rem]" />
            <Image src={img2} alt="...." className="h-[13rem]" />
            <Image src={img3} alt="...." className="h-[13rem]" />
            <Image src={img4} alt="...." className="h-[13rem]" />
          </div>

          <div className="bg-black text-center place-content-center px-20 py-24">
            <div className="lg:text-4xl text-2xl text-white font-bold">
              The <span className="text-red-700 ">future</span> is flexible
            </div>
            <div className="lg:text-normal text-sm text-white mt-4">
              We believe in a world where finding a home is just a click away.
              Whether you’re selling your home, travelling for work or moving to
              a new city. Just bring your bags, and we’ll handle the rest.
            </div>
          </div>
        </div>
      </div>

      {/* Slide 3 */}

      <div className="text-center justify-center mt-32 w-full">
        <div className="px-[18rem]">
          <div className="text-5xl font-bold p-8">
            Your Gateway to Hassle-Free PG Rentals!
          </div>
          <div className="text-center">
            At GrabmyPG, we understand the importance of finding the right
            living space that suits your needs. Whether you're a student, a
            young professional, or someone new to the city, we've got you
            covered.
          </div>
        </div>

        <div className="mt-12 px-24 py-12 grid md:grid-cols-4 grid-cols-2 gap-8 text-left">
          <div className="bg-white rounded-3xl shadow-lg">
            <Card
              image={imgcard1}
              head={`Flexible living`}
              body={`Stay as Long or as little as you need with month-to-month contracts`}
            />
          </div>
          <div className="bg-white rounded-3xl shadow-lg">
            <Card
              image={imgcard2}
              head={`Move-in ready`}
              body={`Ready to move in with everything you need`}
            />
          </div>

          <div className="bg-white rounded-3xl shadow-lg">
            <Card
              image={imgcard3}
              head={`High-speed Wi-Fi`}
              body={`Best in className internet speeds suitable for working 
            from home`}
            />
          </div>

          <div className="bg-white rounded-3xl shadow-lg">
            <Card
              image={imgcard4}
              head={`24/7 support`}
              body={`On hand team for any issues you have`}
            />
          </div>
        </div>
      </div>

      {/* Slide 4 */}

      <div className="relative w-full aspect-[1440/506] overflow-hidden my-32">
        <div className="content-center">
          <div className="-z-30">
            <Image src={hostelpg4} alt="..." className="brightness-50 " />
          </div>

          <div className="absolute bottom-0 flex">
            <div className="my-10 mx-14 text-white">
              <div className="p-10 flex flex-col">
                <span className="text-4xl font-bold">Great PGs </span>
                <span className="text-4xl font-bold mb-2">under a roof</span>

                <span>Expertly designed to create extraordinary</span>
                <span>spaces with the flexible renter in mind</span>
              </div>

              <Link
                href={"/Booking"}
                className="rounded-full px-10 py-2 mx-10 bg-black"
              >
                Start Booking
              </Link>
            </div>
          </div>
        </div>
      </div>

      <br />
      {/* Slide 5 */}

      <div className="relative w-full aspect-[1440/604] overflow-hidden my-12">
        <div className="content-center">
          <div className="-z-30">
            <Image src={hostelpg5} alt="..." className=" " />
          </div>

          <div className="absolute w-full bottom-0 flex place-content-center ">
            <div className="my-10 p-8 bg-white rounded-bl-[0.5rem] rounded-[2.25rem]">
              <div className="flex flex-col text-4xl font-bold ">
                <span>Join</span>
                <span>GrabmyPG!</span>
              </div>

              <span className="mt-4 flex">
                <Link
                  href={"/Booking"}
                  className="px-[4vw]  rounded-full text-center py-2 bg-[#568B6C] "
                >
                  Start Booking
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
}
