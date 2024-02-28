/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

import hostelpg from "../media/hostel-bg.jpg";
import hostelpg4 from "../media/bg-s4.png";
import hostelpg5 from "../media/bg-s5.jpg";
import img1 from "../media/s2-1.jpg";
import img2 from "../media/s2-2.jpg";
import img3 from "../media/s2-3.png";
import img4 from "../media/s2-4.jpg";
import cardimg1 from "../media/icons/card-1.png";
import cardimg2 from "../media/icons/card-2.png";
import cardimg3 from "../media/icons/card-3.png";
import cardimg4 from "../media/icons/card-4.png";

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
            <div className="-z-30">
              {/* carousel attempt */}
              <div className="w-full" data-carousel="slide">
                <div className="overflow-hidden">
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item
                  >
                    <Image
                      src={hostelpg}
                      alt="Hostel Room"
                      className="aspect-[1.88] "
                    />
                  </div>
                  <div className="duration-700 ease-in-out" data-carousel-item>
                    <Image
                      src={hostelpg}
                      alt="Hostel Room"
                      className="aspect-[1.88] "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-[40%] xl:left-[-180px] lg:left-[-120px] left-[-60px] xl:top-52 lg:top-28 top-16">
              <div className="w-full  flex justify-end m-auto p-5 my-10 rounded-3xl bg-white ">
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
      <div className="mt-48 mx-24">
        <div className="rounded-[48px] w-full overflow-hidden flex flex-auto">
          <div className="grid grid-cols-2 w-1/2">
            <Image
              src={img1}
              alt="...."
              className="xl:w-[320px] aspect-[320/190]"
            />
            <Image
              src={img2}
              alt="...."
              className="xl:w-[320px] aspect-[320/190]"
            />
            <Image
              src={img3}
              alt="...."
              className="xl:w-[320px] aspect-[320/190]"
            />
            <Image
              src={img4}
              alt="...."
              className="xl:w-[320px] aspect-[320/190]"
            />
          </div>

          <div className="bg-black text-center place-content-center w-1/2 px-20 py-24">
            <div className="text-4xl text-white font-bold">
              The <span className="text-red-700 ">future</span> is flexible
            </div>
            <div className="text-normal text-white mt-4">
              We believe in a world where finding a home is just a click away.
              Whether you’re selling your home, travelling for work or moving to
              a new city. Just bring your bags, and we’ll handle the rest.
            </div>
          </div>
        </div>
      </div>

      {/* Slide 3 */}

      <div className="text-center justify-center mt-32 w-full">
        <div className="px-72">
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

        <div className="mt-12 px-24 py-12 grid grid-cols-4 gap-8">
          <Card
            image={cardimg1}
            head={`Flexible living`}
            body={`Stay as Long or as little as you need with month-to-month contracts`}
          />
          <Card
            image={cardimg2}
            head={`Move-in ready`}
            body={`Ready to move in with everything you need`}
          />
          <Card
            image={cardimg3}
            head={`High-speed Wi-Fi`}
            body={`Best in class internet speeds suitable for working 
            from home`}
          />
          <Card
            image={cardimg4}
            head={`24/7 support`}
            body={`On hand team for any issues you have`}
          />
        </div>
      </div>

      {/* Slide 4 */}

      <div className="relative w-full aspect-[1440/506] overflow-hidden my-32">
        <div className="content-center">
          <div className="-z-30">
            <Image src={hostelpg4} alt="..." className="brightness-50 " />
          </div>

          <div className="absolute w-2/5 top-20 flex">
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
                <Link href={"#search-bar"}>Start Booking</Link>
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

          <div className="absolute w-full top-24 flex place-content-center ">
            <div className="my-10 p-16 bg-white rounded-bl-lg rounded-[36px] w-1/3">
              <div className="p-4 space-y-2 xl:text-5xl lg:text-4xl text-3xl font-bold">
                Join GrabmyPG!
              </div>

              <button className="w-full rounded-full px-10 py-2 bg-[#568B6C]">
                <Link href={"#search-bar"}>Start Booking</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
}
