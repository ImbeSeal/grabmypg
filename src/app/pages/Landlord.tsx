/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import landlordjp from "../media/landlord.jpg";
import Card from "./Card";
import cardimg1 from "../media/icons/card-ll-1.png";
import cardimg2 from "../media/icons/card-ll-2.png";
import cardimg3 from "../media/icons/card-ll-3.png";
import cardimg4 from "../media/icons/card-ll-4.png";

import timeimg1 from "../media/icons/timeline-1.png";
import timeimg2 from "../media/icons/timeline-2.png";
import timeimg3 from "../media/icons/timeline-3.png";
import timeimg4 from "../media/icons/timeline-4.png";
import timeimg5 from "../media/icons/timeline-5.png";

import timeline from "../media/timeline.png";
import { time } from "console";

export function Landlord() {
  return (
    <div className="bg-[#F0F0F0]">
      {/* Slide 1 */}

      <div className="relative w-full">
        <div className="content-center">
          <div className="-z-30">
            <div className="overflow-hidden">
              <Image
                src={landlordjp}
                alt="Hostel Room"
                className="aspect-[1440/820] "
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="absolute w-[50%] mr-8 top-1">
            <div className="w-full place-content-center m-auto p-5 my-10 rounded-3xl bg-white opacity-80">
              <div className=" mx-10 my-10 space-y-6">
                <div className="xl:text-4xl lg:text-3xl text-2xl font-bold">
                  Earn more from your property, do less
                </div>
                <div className="xl:text-base lg:text-sm text-xs">
                  Find out if your property meets our criteria
                </div>
              </div>
              <div className="w-full">
                <form action="">
                  <div className="mx-6 space-y-4">
                    <input
                      type="text"
                      name="name"
                      className="block md:w-full rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:italic placeholder:text-[#49735A]"
                      placeholder="Name*"
                    />
                    <input
                      type="email"
                      name="email"
                      className="block md:w-full rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:italic placeholder:text-[#49735A]"
                      placeholder="Email*"
                    />
                    <input
                      type="text"
                      name="phone"
                      className="block md:w-full rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:italic placeholder:text-[#49735A]"
                      placeholder="Phone number*"
                    />
                  </div>
                </form>
              </div>

              <div className="mx-10 text-2xl my-6">Property details</div>

              <div className="w-full">
                <form action="">
                  <div className="mx-6 space-y-4 ">
                    <div className="flex flex-wrap gap-16">
                      <input
                        type="text"
                        name="name"
                        className="rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:italic placeholder:text-[#49735A]"
                        placeholder="City*"
                      />
                      <input
                        type="email"
                        name="email"
                        className="rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:italic placeholder:text-[#49735A]"
                        placeholder="Area*"
                      />
                    </div>
                    <input
                      type="text"
                      name="phone"
                      className="block md:w-full rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:italic placeholder:text-[#49735A]"
                      placeholder="*"
                    />
                  </div>
                  <div className="flex place-content-center text-xl my-10 ">
                    <button
                      type="submit"
                      className="px-8 py-2 rounded-[24px] bg-[#064749] text-white"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}

      <div className="text-center justify-center mt-32 w-full">
        <div className="px-72">
          <div className="text-5xl font-bold p-8">Features we offer</div>
          <div className="text-center">
            We work to meet accommodation needs in Sikkim . Offer a dedicated
            booking manager that can help to find properties for your needs.
          </div>
        </div>

        <div className="mt-12 px-24 py-12 grid grid-cols-4 gap-8 text-left">
          <div className="bg-white rounded-3xl shadow-lg">
            <Card
              image={cardimg1}
              head={`Guaranteed rent`}
              body={`We do the searching for you`}
            />
          </div>

          <div className="bg-white rounded-3xl shadow-lg">
            <Card
              image={cardimg2}
              head={`No fees`}
              body={`Preferred partner rates`}
            />
          </div>

          <div className="bg-white rounded-3xl shadow-lg">
            <Card
              image={cardimg3}
              head={`No voids`}
              body={`Preferred partner rates`}
            />
          </div>

          <div className="bg-white rounded-3xl shadow-lg">
            <Card
              image={cardimg4}
              head={`24/7 maintenance`}
              body={`Extend on short notice`}
            />
          </div>
        </div>
      </div>

      {/* Slide 3 */}

      <div className="mt-36 m-24">
        <div className="bg-white rounded-[36px] ">
          <div className="place-content-center text-center text-5xl font-bold p-12">
            How it works
          </div>

          <div className="px-36 pb-24">
            {/* Timeline Line */}
            <div className="absolute left-1/2 place-content-center border-[1px] border-black mt-12 h-[800px]"></div>

            <div className="relative">
              <div className="absolute inset-0 w-4 h-4 mx-auto mt-12 rounded-[12px] aspect-square bg-black"></div>

              <div className="w-1/2 grid place-items-end text-right">
                <div className="px-8 space-y-4 ">
                  <div className="w-full grid justify-items-end">
                    <Image
                      src={timeimg1}
                      alt="..."
                      className="w-[80px] aspect-square"
                    />
                  </div>
                  <div className="text-3xl font-bold">Get in touch</div>
                  <div className="text-normal">
                    Need ideas or suggestions? Check out our blog for
                    inspiration on room decor, organization tips, and more
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-row-reverse">
              <div className="absolute inset-0 w-4 h-4 mx-auto mt-12 rounded-[12px] aspect-square bg-black"></div>

              <div className="w-1/2 grid place-items-end text-left">
                <div className="px-8 space-y-4 ">
                  <div className="w-full ">
                    <Image
                      src={timeimg2}
                      alt="..."
                      className="w-[80px] aspect-square"
                    />
                  </div>
                  <div className="text-3xl font-bold">Let’s chat</div>
                  <div className="text-normal">
                    Need ideas or suggestions? Check out our blog for
                    inspiration on room decor, organization tips, and more.
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 w-4 h-4 mx-auto mt-12 rounded-[12px] aspect-square bg-black"></div>

              <div className="w-1/2 grid place-items-end text-right">
                <div className="px-8 space-y-4 ">
                  <div className="w-full grid justify-items-end">
                    <Image
                      src={timeimg3}
                      alt="..."
                      className="w-[80px] aspect-square"
                    />
                  </div>
                  <div className="text-3xl font-bold">Property viewing</div>
                  <div className="text-normal">
                    Need ideas or suggestions? Check out our blog for
                    inspiration on room decor, organization tips, and more
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-row-reverse">
              <div className="absolute inset-0 w-4 h-4 mx-auto mt-12 rounded-[12px] aspect-square bg-black"></div>

              <div className="w-1/2 grid place-items-end text-left">
                <div className="px-8 space-y-4 ">
                  <div className="w-full ">
                    <Image
                      src={timeimg4}
                      alt="..."
                      className="w-[80px] aspect-square"
                    />
                  </div>
                  <div className="text-3xl font-bold">Property listing </div>
                  <div className="text-normal">
                    Need ideas or suggestions? Check out our blog for
                    inspiration on room decor, organization tips, and more
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 w-4 h-4 mx-auto mt-12 rounded-[12px] aspect-square bg-black"></div>

              <div className="w-1/2 grid place-items-end text-right">
                <div className="px-8 space-y-4 ">
                  <div className="w-full grid justify-items-end">
                    <Image
                      src={timeimg5}
                      alt="..."
                      className="w-[80px] aspect-square"
                    />
                  </div>
                  <div className="text-3xl font-bold">Listing Finished </div>
                  <div className="text-normal">
                    Need ideas or suggestions? Check out our blog for
                    inspiration on room decor, organization tips, and more
                  </div>
                </div>
              </div>
            </div>

            {/* End of timeline */}
          </div>
        </div>
      </div>

      {/* Slide 4 */}

      <div className="mt-36 px-24">
        <div className="place-content-center text-center text-5xl font-bold p-6">
          Frequently Asked Questions
        </div>

        {/* Accordion Work in progress*/}
      </div>
    </div>
  );
}
