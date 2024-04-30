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
import cardimg1 from "../app/assets/icons/card-1.png";
import cardimg2 from "../app/assets/icons/card-2.png";
import cardimg3 from "../app/assets/icons/card-3.png";
import cardimg4 from "../app/assets/icons/card-4.png";
import search from "../app/assets/icons/searchbar.png";

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
              <div className="w-1/2 mx-auto p-1 border-4 border-black rounded-full bg-white flex flex-row">
                <div className="my-auto text-lg w-1/2 ml-8 text-slate-800">
                  Want to select a pg fit for you?
                </div>
                <span className="w-1/2 flex flex-row-reverse">
                  <Link
                    href="./Booking"
                    className="text-white rounded-full bg-[#064749] hover:bg-[#274b4d] font-medium text-sm py-4 px-12 "
                  >
                    Start Booking
                  </Link>
                </span>
              </div>
              {/* <form className="w-3/5 mx-auto">
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
                    className="block w-full p-4 ps-16 placeholder:text-gray-800 border-black border-4 rounded-[300px] "
                    placeholder="Select a city"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute rounded-[200px] end-2 bottom-1.5 bg-[#064749] hover:bg-[#274b4d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm py-4 px-12 "
                  >
                    Search
                  </button>
                </div>
              </form> */}
            </div>
            <div className="-z-30">
              <div className="overflow-hidden w-full">
                <Image
                  src={hostelpg}
                  alt="Hostel Room"
                  className="aspect-[1.88] "
                />
              </div>
            </div>
            <div className="absolute lg:w-[40%] sm:w-[70%] xl:left-[-180px] left-[-120px] xl:top-52 lg:bottom-28 md:bottom-16 bottom-0">
              <div className="w-full  flex justify-end m-auto px-5 my-10 rounded-3xl bg-white ">
                <div className="w-3/5 mx-10 my-10 space-y-6">
                  <div className="xl:text-4xl lg:text-3xl text-2xl font-bold">
                    Get the Right PG For You
                  </div>
                  <div className="xl:text-base lg:text-sm text-xs">
                    Looking for the perfect Paying Guest accommodation? Your
                    search ends here! GrabmyPG is your go-to platform for
                    seamless room bookings in prime locations.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="mt-48 lg:mx-24 mx-12">
        <div className="rounded-[48px] w-full overflow-hidden flex flex-auto">
          <div className="grid grid-cols-2 w-1/2">
            <Image src={img1} alt="...." className="h-full" />
            <Image src={img2} alt="...." className=" h-full" />
            <Image src={img3} alt="...." className=" h-full" />
            <Image src={img4} alt="...." className=" h-full" />
          </div>

          <div className="bg-black text-center place-content-center w-1/2 px-20 py-24">
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
        <div className="lg:px-72 px-36">
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

        <div className="mt-12 px-24 py-12 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 text-left">
          <div className="bg-white rounded-3xl shadow-lg">
            <Card
              image={cardimg1}
              head={`Flexible living`}
              body={`Stay as Long or as little as you need with month-to-month contracts`}
            />
          </div>
          <div className="bg-white rounded-3xl shadow-lg">
            <Card
              image={cardimg2}
              head={`Move-in ready`}
              body={`Ready to move in with everything you need`}
            />
          </div>

          <div className="bg-white rounded-3xl shadow-lg">
            <Card
              image={cardimg3}
              head={`High-speed Wi-Fi`}
              body={`Best in className internet speeds suitable for working 
            from home`}
            />
          </div>

          <div className="bg-white rounded-3xl shadow-lg">
            <Card
              image={cardimg4}
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

          <div className="absolute lg:w-2/5 w-1/2 bottom-0 flex">
            <div className="my-10 mx-14 text-white">
              <div className="p-10 space-y-2">
                <div className="xl:text-4xl lg:text-3xl text-2xl font-bold">
                  Great PGs under a roof
                </div>
                <div className="xl:text-base lg:text-sm text-xs">
                  Expertly designed to create extraordinary spaces with the
                  flexible renter in mind
                </div>
              </div>

              <button className="rounded-full px-10 py-2 mx-10 bg-black">
                <Link href={"/Booking"}>Start Booking</Link>
              </button>
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
            <div className="my-10 p-16 bg-white rounded-bl-lg rounded-[36px] w-1/3">
              <div className="p-4 space-y-2 xl:text-5xl lg:text-4xl text-3xl font-bold">
                Join GrabmyPG!
              </div>

              <button className="w-full rounded-full px-10 py-2 bg-[#568B6C]">
                <Link href={"/Booking"}>Start Booking</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
}
