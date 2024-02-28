/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Contact() {
  return (
    <main className="">
      <div className="px-32 py-6 text-5xl font-bold">Contact us</div>
      <div className="grid grid-cols-2 place-content-evenly">
        <div className="px-32">
          <fieldset>
            <legend className="text-xl font-semibold leading-6 text-gray-900 ">
              What would you like to contact us about?
            </legend>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-x-3">
                <input
                  id="customer"
                  name="account-type"
                  type="radio"
                  className="h-6 w-6 bg-[#f2f0f2]"
                />
                <label
                  htmlFor="customer"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  I'm a Customer
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="landlord"
                  name="account-type"
                  type="radio"
                  className="h-6 w-6"
                />
                <label
                  htmlFor="landlord"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  I'm a Landlord
                </label>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <input
                type="text"
                name="name"
                className="block md:w-2/3 rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:text-gray-400"
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                className="block md:w-2/3 rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:text-gray-400"
                placeholder="Email"
              />
              <input
                type="text"
                name="phone"
                className="block md:w-2/3 rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:text-gray-400"
                placeholder="Phone number"
              />
              <textarea
                name="message"
                rows={4}
                className="block md:w-2/3 rounded-md px-6 py-1.5 bg-[#f2f0f2] text-gray-900 placeholder:text-gray-400"
                placeholder="Message"
              ></textarea>
            </div>
          </fieldset>
        </div>

        <div className="grid grid-cols-2 gap-4 p-32 place-content-evenly">
          <div className="text-2xl font-bold">For Landlords:</div>
          <div className="">
            <div className="">supply@Grabmypg.com</div>
            <div className="">0203 307 4477</div>
          </div>
          <div className="text-2xl font-bold">For Maintenance:</div>
          <div className="">
            <div className="">maintenance@Grabmypg.com</div>
            <div className="">0203 307 4477</div>
          </div>
        </div>
      </div>
    </main>
  );
}
