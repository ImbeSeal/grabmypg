/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { ChangeEvent, FormEvent } from "react";

import Card from "../../components/Card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Accordion from "@/components/Accordion";

import landlordjp from "../assets/landlord.jpg";

import {
  cardimg1,
  cardimg2,
  cardimg3,
  cardimg4,
  timeimg1,
  timeimg2,
  timeimg3,
  timeimg4,
  timeimg5,
} from "../assets/icons/index";

export default function Landlord() {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    city: "",
    addr: "",
    propname: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    if (
      formData.name == "" ||
      formData.email == "" ||
      formData.phone == "" ||
      formData.city == "" ||
      formData.addr == "" ||
      formData.propname == ""
    ) {
      setLoading(false);
      alert("Please enter all fields");
      return false;
    }

    const response = await fetch("/api/sendland", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });
    await response.json();

    if (response.status === 200) {
      setFormData(initialFormData);
      toast.success(
        `Hey ${formData.name}, your details was sent successfully! The admin will contact you soon`
      );
      setLoading(false);
    } else if (response.status === 500) {
      toast.error(`Oops! Something went wrong!`);
      setLoading(false);
    }

    return true;
  };

  return (
    <main className="bg-white bg-opacity-55 text-black flex justify-center">
      <Toaster position="bottom-right" toast-options={{ duration: 3000 }} />
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
            <div className="absolute h-full mr-[2rem] px-[2rem] top-[1rem]">
              <div className="place-content-center p-[1rem] rounded-3xl bg-white bg-opacity-100 opacity-80">
                <div className="mx-10 mt-10 space-y-[1.5rem]">
                  <div className="text-4xl font-bold">
                    Earn more from your property, do less
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <legend className="text-base mx-10 mt-4">
                    Find out if your property meets our criteria
                  </legend>
                  <fieldset>
                    <div className="grid grid-cols-1">
                      <div className="mx-10 text-xl py-[1.5rem] text-center">
                        Your details
                      </div>
                      <div className="w-full">
                        <div className="w-1/2 space-y-4 mx-auto">
                          <input
                            type="text"
                            name="name"
                            className="w-full block rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:italic placeholder:text-[#49735A]"
                            placeholder="Name*"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <input
                            type="email"
                            name="email"
                            className="w-full block rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:italic placeholder:text-[#49735A]"
                            placeholder="Email*"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <input
                            type="text"
                            name="phone"
                            className="w-full block rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:italic placeholder:text-[#49735A]"
                            placeholder="Phone number*"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="mx-10 text-xl py-[1.5rem] text-center">
                        Property details
                      </div>
                      <div className="w-full">
                        <div className="mx-auto space-y-4 w-1/2">
                          <input
                            type="text"
                            name="propname"
                            className="w-full rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:italic placeholder:text-[#49735A]"
                            placeholder="Property Name*"
                            value={formData.propname}
                            onChange={handleChange}
                          />
                          <input
                            type="text"
                            name="city"
                            className="w-full rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:italic placeholder:text-[#49735A]"
                            placeholder="City*"
                            value={formData.city}
                            onChange={handleChange}
                          />
                          <input
                            type="text"
                            name="addr"
                            className="w-full rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:italic placeholder:text-[#49735A]"
                            placeholder="Address*"
                            value={formData.addr}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <div className="grid justify-center mt-4">
                    <button
                      type="submit"
                      className="px-8 py-2 rounded-full bg-[#064749] text-white mb-[1.5rem]"
                    >
                      {loading ? (
                        <div
                          style={{
                            borderTopColor: "transparent",
                          }}
                          className="w-6 h-6 border-4 border-white border-solid rounded-full animate-spin"
                        ></div>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}

        <div className="text-center justify-center mt-32 w-full">
          <div className="px-[18rem]">
            <div className="text-5xl font-bold p-8">Features we offer</div>
            <div className="text-center">
              We work to meet accommodation needs in Sikkim . Offer a dedicated
              booking manager that can help to find properties for your needs.
            </div>
          </div>

          <div className="mt-12 px-24 py-12 grid grid-cols-4 gap-8 text-left">
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
          <div className="bg-white bg-opacity-55 rounded-[2rem] ">
            <div className="place-content-center text-center text-5xl font-bold p-12">
              How it works
            </div>

            <div className="px-[3.5rem] pb-24">
              {/* Timeline Line */}

              <div className="">
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-2 h-2 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-black text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      {" "}
                    </div>

                    <div className="w-[calc(100%-1rem)] md:w-[calc(50%-0.5rem)] p-4 rounded">
                      <div className="px-8 space-y-4 ">
                        <div className="w-full grid">
                          <Image
                            src={timeimg1}
                            alt="..."
                            className="w-[5rem] aspect-square"
                          />
                        </div>
                        <div className="lg:text-3xl text-2xl font-bold">
                          Get in touch
                        </div>
                        <div className="text-normal">
                          Need ideas or suggestions? Check out our blog for
                          inspiration on room decor, organization tips, and more
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-2 h-2 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-black text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      {" "}
                    </div>

                    <div className="w-[calc(100%-1rem)] md:w-[calc(50%-0.5rem)] p-4 rounded  ">
                      <div className="px-8 space-y-4 ">
                        <div className="w-full md:grid justify-items-end">
                          <Image
                            src={timeimg2}
                            alt="..."
                            className="w-[5rem] aspect-square "
                          />
                        </div>
                        <div className="lg:text-3xl text-2xl font-bold md:text-right">
                          Let’s chat
                        </div>
                        <div className="text-normal md:text-right">
                          Need ideas or suggestions? Check out our blog for
                          inspiration on room decor, organization tips, and
                          more.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-2 h-2 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-black text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      {" "}
                    </div>

                    <div className="w-[calc(100%-1rem)] md:w-[calc(50%-0.5rem)] p-4 rounded  ">
                      <div className="px-8 space-y-4 ">
                        <div className="w-full grid ">
                          <Image
                            src={timeimg3}
                            alt="..."
                            className="w-[5rem] aspect-square"
                          />
                        </div>
                        <div className="lg:text-3xl text-2xl font-bold">
                          Property viewing
                        </div>
                        <div className="text-normal">
                          Need ideas or suggestions? Check out our blog for
                          inspiration on room decor, organization tips, and more
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-2 h-2 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-black text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      {" "}
                    </div>

                    <div className="w-[calc(100%-1rem)] md:w-[calc(50%-0.5rem)] p-4 rounded  ">
                      <div className="px-8 space-y-4 ">
                        <div className="w-full md:grid justify-items-end">
                          <Image
                            src={timeimg4}
                            alt="..."
                            className="w-[5rem] aspect-square "
                          />
                        </div>
                        <div className="lg:text-3xl text-2xl font-bold md:text-right">
                          Property listing{" "}
                        </div>
                        <div className="text-normal md:text-right">
                          Need ideas or suggestions? Check out our blog for
                          inspiration on room decor, organization tips, and more
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-2 h-2 rounded-full border border-white bg-black group-[.is-active]:bg-black text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      {" "}
                    </div>

                    <div className="w-[calc(100%-1rem)] md:w-[calc(50%-0.5rem)] p-4 rounded  ">
                      <div className="px-8 space-y-4 ">
                        <div className="w-full">
                          <Image
                            src={timeimg5}
                            alt="..."
                            className="w-[5rem] aspect-square"
                          />
                        </div>
                        <div className="lg:text-3xl text-2xl font-bold">
                          Listing Finished{" "}
                        </div>
                        <div className="text-normal">
                          Need ideas or suggestions? Check out our blog for
                          inspiration on room decor, organization tips, and more
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4 */}

        <div className="mt-36 px-24" id="accordion">
          <div className="place-content-center text-center text-5xl font-bold p-6">
            Frequently Asked Questions
          </div>

          {/* Accordion Work in progress*/}
          <div className="space-y-4 py-12">
            <Accordion
              title={"This is a question"}
              content={"This is details"}
              index={1}
            />
            <Accordion
              title={"This is a question"}
              content={"This is details"}
              index={2}
            />
            <Accordion
              title={"This is a question"}
              content={"This is details"}
              index={3}
            />
            <Accordion
              title={"This is a question"}
              content={"This is details"}
              index={4}
            />
            <Accordion
              title={"This is a question"}
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
