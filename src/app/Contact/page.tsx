/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { ChangeEvent, FormEvent } from "react";
export default function Contact() {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [type, setType] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    if (
      type == "" ||
      formData.name == "" ||
      formData.email == "" ||
      formData.phone == "" ||
      formData.message == ""
    ) {
      setLoading(false);
      alert("Please enter all fields");
      return false;
    }

    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({ type, formData }),
    });
    if (response.status === 200) {
      setFormData(initialFormData);
      setType("");
      toast.success(
        `Hey ${formData.name}, your message was sent successfully!`
      );
      setLoading(false);
    }

    return true;
  };

  return (
    <main className=" text-black flex justify-center">
      <Toaster position="bottom-right" toast-options={{ duration: 3000 }} />
      <div className="max-w-[1440px] bg-[#F0F0F0] min-h-[100vh] grid gris-cols-1 content-between">
        <div className="">
          <Navbar />
        </div>
        <div className="pt-12">
          <div className="px-32 pt-12 text-5xl font-bold">Contact us</div>
          <div className="grid grid-cols-2  p-12">
            <div className="px-16 border-r-[0.25rem] border-white max-w-[60vw] ">
              <form className="" onSubmit={handleSubmit}>
                <legend className="text-xl font-semibold leading-6 text-gray-900">
                  What would you like to contact us about?
                </legend>
                <fieldset>
                  <div className="flex flex-col mt-4 space-y-2">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="customer"
                        name="type"
                        type="radio"
                        className="h-6 w-6 bg-white"
                        value="Customer"
                        checked={type === "Customer"}
                        onChange={(e) => {
                          setType(e.target.value);
                        }}
                      />
                      <label
                        htmlFor="customer"
                        className="black w-[24rem] text-sm font-medium leading-6 text-gray-900"
                      >
                        I'm a Customer
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="landlord"
                        name="type"
                        type="radio"
                        className="h-6 w-6"
                        value="Landlord"
                        checked={type === "Landlord"}
                        onChange={(e) => {
                          setType(e.target.value);
                        }}
                      />
                      <label
                        htmlFor="landlord"
                        className="black w-[24rem] text-sm font-medium leading-6 text-gray-900"
                      >
                        I'm a Landlord
                      </label>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 flex flex-col">
                    <input
                      type="text"
                      name="name"
                      className="black w-[24rem]  rounded-md px-6 py-1.5 bg-white text-gray-900 placeholder:text-gray-400"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      name="email"
                      className="black w-[24rem] rounded-md px-6 py-1.5 bg-white text-gray-900 placeholder:text-gray-400"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="phone"
                      className="black w-[24rem] rounded-md px-6 py-1.5 bg-white text-gray-900 placeholder:text-gray-400"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="message"
                      className="black w-[24rem] rounded-md px-6 py-1.5 bg-white text-gray-900 placeholder:text-gray-400"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></input>
                  </div>
                </fieldset>
                <button
                  type="submit"
                  className="rounded-md bg-slate-600 px-3.5 py-2.5 text-sm font-semibold mt-4 text-white shadow-sm hover:bg-white hover:text-black"
                >
                  {loading ? (
                    <div
                      style={{
                        borderTopColor: "transparent",
                      }}
                      className="w-6 h-6 border-[0.25rem] border-white border-solid rounded-full animate-spin"
                    ></div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
            <div className="px-16 py-8 w-full ">
              <div className="grid grid-cols-2 gap-4 place-content-evenly max-w-[50vw] mx-auto">
                <div className="text-2xl font-bold">For Landlords:</div>
                <div className="text-end">
                  <div className="">supply@Grabmypg.com</div>
                  <div className="">0203 307 4477</div>
                </div>
                <div className="text-2xl font-bold">For Maintenance:</div>
                <div className="text-end">
                  <div className="">maintenance@Grabmypg.com</div>
                  <div className="">0203 307 4477</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>{""}</div>
        <div>{""}</div>
        <div className="w-full row-start-15">
          <Footer />
        </div>
      </div>
    </main>
  );
}
