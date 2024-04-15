/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";

import Card from "../../components/Card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Accordion from "@/components/Accordion";

import landlordjp from "../assets/landlord.jpg";

import cardimg1 from "../assets/icons/card-ll-1.png";
import cardimg2 from "../assets/icons/card-ll-2.png";
import cardimg3 from "../assets/icons/card-ll-3.png";
import cardimg4 from "../assets/icons/card-ll-4.png";

import timeimg1 from "../assets/icons/timeline-1.png";
import timeimg2 from "../assets/icons/timeline-2.png";
import timeimg3 from "../assets/icons/timeline-3.png";
import timeimg4 from "../assets/icons/timeline-4.png";
import timeimg5 from "../assets/icons/timeline-5.png";

import timeline from "../assets/timeline.png";
import { time } from "console";

export default function Landlord() {
  return (
    <main className="bg-white bg-opacity-55 text-black flex justify-center">
      <div className="bg-[#F0F0F0] max-w-[1440px]">
        {/* Slide 1 */}
        <div className="bg-white">
          <Navbar />
        </div>
        <div className="relative w-full aspect-[1440/820]">
          <div className="content-center">
            <div className="-z-30 overflow-hidden">
              <Image
                src={landlordjp}
                alt="Hostel Room"
                className="aspect-[1440/820] "
              />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="absolute xl:w-1/2 w-full xl:mr-8 px-8 top-8">
              <div className="w-full place-content-center m-auto p-5 rounded-3xl bg-white bg-opacity-100 opacity-80">
                <div className="mx-10 mt-10 space-y-6">
                  <div className="xl:text-4xl lg:text-3xl text-xl font-bold">
                    Earn more from your property, do less
                  </div>
                  <div className="xl:text-base lg:text-sm text-xs">
                    Find out if your property meets our criteria
                  </div>
                </div>

                <div className="grid xl:grid-cols-1 grid-cols-2">
                  <div className="xl:border-0 border-r-2">
                    <div className="mx-10 xl:text-xl text-xl xl:py-6 py-4 text-center">
                      Your details
                    </div>
                    <div className="w-full">
                      <form action="" className="">
                        <div className="w-1/2 space-y-4 mx-auto">
                          <input
                            type="text"
                            name="name"
                            className="w-full block rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:italic placeholder:text-[#49735A]"
                            placeholder="Name*"
                          />
                          <input
                            type="email"
                            name="email"
                            className="w-full block rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:italic placeholder:text-[#49735A]"
                            placeholder="Email*"
                          />
                          <input
                            type="text"
                            name="phone"
                            className="w-full block rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:italic placeholder:text-[#49735A]"
                            placeholder="Phone number*"
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="xl:border-0 border-l-2">
                    <div className="mx-10 xl:text-xl text-xl xl:py-6 py-4 text-center">
                      Property details
                    </div>
                    <div className="w-full">
                      <form action="">
                        <div className="mx-auto space-y-4 w-1/2">
                          <div className="grid xl:grid-cols-2 gap-4">
                            <input
                              type="text"
                              name="name"
                              className="w-full rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:italic placeholder:text-[#49735A]"
                              placeholder="City*"
                            />
                            <input
                              type="email"
                              name="email"
                              className="w-full rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:italic placeholder:text-[#49735A]"
                              placeholder="Area*"
                            />
                          </div>
                          <input
                            type="text"
                            name="phone"
                            className="w-full rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:italic placeholder:text-[#49735A]"
                            placeholder="*"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="flex place-content-center text-xl my-10 ">
                  <button
                    type="submit"
                    className="px-8 py-2 rounded-[24px] bg-[#064749] text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}

        <div className="text-center justify-center mt-32 w-full">
          <div className="xl:px-72 px-64">
            <div className="text-5xl font-bold p-8">Features we offer</div>
            <div className="text-center">
              We work to meet accommodation needs in Sikkim . Offer a dedicated
              booking manager that can help to find properties for your needs.
            </div>
          </div>

          <div className="mt-12 px-24 py-12 grid xl:grid-cols-4 grid-cols-2 gap-8 text-left">
            <div className="bg-white bg-opacity-55 rounded-3xl shadow-lg">
              <Card
                image={cardimg1}
                head={`Guaranteed rent`}
                body={`We do the searching for you`}
              />
            </div>

            <div className="bg-white bg-opacity-55 rounded-3xl shadow-lg">
              <Card
                image={cardimg2}
                head={`No fees`}
                body={`Preferred partner rates`}
              />
            </div>

            <div className="bg-white bg-opacity-55 rounded-3xl shadow-lg">
              <Card
                image={cardimg3}
                head={`No voids`}
                body={`Preferred partner rates`}
              />
            </div>

            <div className="bg-white bg-opacity-55 rounded-3xl shadow-lg">
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
          <div className="bg-white bg-opacity-55 rounded-[36px] ">
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
          <div className="space-y-4 py-12">
            <Accordion
              title={"1. This is a question"}
              content={"This is details"}
              index={1}
            />
            <Accordion
              title={"2. This is a question"}
              content={"This is details"}
              index={2}
            />
            <Accordion
              title={"3. This is a question"}
              content={"This is details"}
              index={3}
            />
            <Accordion
              title={"4. This is a question"}
              content={"This is details"}
              index={4}
            />
            <Accordion
              title={"5. This is a question"}
              content={"This is details"}
              index={5}
            />
          </div>
        </div>

        <div className="w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}
