"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Suspense } from "react";
import dynamic from "next/dynamic";

import { CardProp } from "./Card";
import { useRouter, useSearchParams } from "next/navigation";
import { doc, getDocs, collection, query, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Carousel from "@/components/Carousel";

//Loader
const Loader = dynamic(
  async () => (await import("../../components/Loader")).Loader,
  {
    ssr: false,
  }
);

import hostel2 from "../assets/hostel-bg.jpg";

interface UserDetails {
  images: string[]; // Assuming images is an array of strings
  title: string; // Assuming title is a string
  addrFull: string; // Assuming addrFull is a string
  food: string; // Assuming food is an optional array of strings
  price: number; // Assuming price is a number
  contact: {
    name: string; // Assuming name is a string
    number: string; // Assuming number is a string
    email: string; // Assuming email is a string
  };
  // Add other fields as needed
}

function Display() {
  // extra variables to be added:
  let description =
    "A truly global city, Delhi has long been considered a cutting-edge metropolis and hub for culture, style and finance. With each borough, Tube zone and neighborhood of Delhi sporting its own vibe and lifestyle advantages, it can be downright difficult to settle on where to look for a furnished apartment in Delhi . Whether you’re a digital nomad looking for a studio apartment in Delhi or just seeking a month to month rental inDelhi, Blueground has you covered.";
  //amenities is Array[Array[String]] 0 is general properties, 1, 2, 3, 4 are respective beds
  let amenities = [
    [
      "Amenity General",
      "Amenity General",
      "Amenity General",
      "Amenity General",
      "Amenity General",
    ],
    [
      "Amenity single",
      "Amenity single",
      "Amenity single",
      "Amenity single",
      "Amenity single",
    ],
    ["Amenity Double", "Amenity Double", "Amenity Double", "Amenity Double"],
    ["Amenity Triple", "Amenity Triple", "Amenity Triple"],
    ["Amenity Four", "Amenity Four"],
  ];
  let rules = ["Rule 1", "Rule 2", "Rule 3"];

  //Each of the bottom variables are of length 4: 1 for each type
  let secdeposit = [null, 2000, 4000, 6000];
  let locking = ["2 days", "2 days", "2 days", "2 days"];
  let notice = ["2 days", "2 days", "2 days", "2 days"];

  //End of required variables;

  const [full, setFull] = useState(false);

  const handleFullScreen = () => {
    setFull(!full);
  };

  const [date, setDate] = useState(new Date());
  const today = new Date();

  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams!.get("id");
  const [details, setDetailsData] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const docRef = doc(db, "PG", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDetailsData(docSnap.data() as UserDetails);
        } else {
          console.log("Doc not found");
          router.push("/");
        }
        setLoading(false);
      } catch (error) {
        console.error("error fetching doc:", error);
        router.push("/");
      }
    };

    if (id) {
      fetchData();
    }
  }, [id, router]);

  if (loading) {
    return (
      <div className="mt-[360px]">
        <Loader />
        <h1 className="text-center text-2xl">Loading...</h1>
      </div>
    );
  }

  if (!details) {
    return <p>Details not found.</p>;
  }
  //These are the data going in the tabs for each type of Room; The offered variable an be a number eather 0 or 1 or can be bool: 0 is offered, 1 is not;

  //Need to update details.price to be Array[Number]: 0 1 2 3;
  let tabs = [
    {
      id: "single",
      offered: 1,
      label: "Single Sharing",
      price: Number(details.price),
      amenities: amenities[1],
      secdeposit: secdeposit[0],
      locking: locking[0],
      notice: notice[0],
    },
    {
      id: "double",
      offered: 1,
      label: "Double Sharing",
      price: Number(details.price) * 2,
      amenities: amenities[2],
      secdeposit: secdeposit[1],
      locking: locking[1],
      notice: notice[1],
    },
    {
      id: "triple",
      offered: 1,
      label: "Triple Sharing",
      price: Number(details.price) * 3,
      amenities: amenities[3],
      secdeposit: secdeposit[2],
      locking: locking[2],
      notice: notice[2],
    },
    {
      id: "four",
      offered: 1,
      label: "Four Sharing",
      price: Number(details.price) * 4,
      amenities: amenities[4],
      secdeposit: secdeposit[3],
      locking: locking[3],
      notice: notice[3],
    },
  ];
  if (full === true)
    return (
      <div className="relative h-screen ">
        <div className="bg-slate-900 ">
          <span className="absolute top-0 text-right px-4 w-full z-20">
            <button
              type="button"
              className="z-1 rounded-full bg-white text-slate-900 px-4 py-2 my-4 text-sm cursor-pointer hover:bg-blue-600"
              onClick={handleFullScreen}
            >
              Go back
            </button>
          </span>

          <Carousel images={details.images} type={full} />
        </div>
      </div>
    );
  else
    return (
      <main className="bg-white bg-opacity-55 text-black flex justify-center">
        <div className="bg-[#F0F0F0]  max-w-[1440px]">
          <div className="bg-white">
            <Navbar />
          </div>

          <div className="grid grid-cols-12">
            <span className="col-span-12">
              <div className="relative grid grid-cols-1 ">
                <div className="rounded-[1rem] mx-4 ">
                  <Carousel images={details.images} type={full} />
                </div>
                <span className="absolute bottom-10 text-center w-full z-20">
                  <button
                    type="button"
                    className="rounded-full bg-slate-900 text-white px-4 py-2 my-4 text-sm cursor-pointer hover:bg-blue-600"
                    onClick={handleFullScreen}
                  >
                    View Full Images
                  </button>
                </span>
              </div>
            </span>

            <span className="p-16 col-span-6 ">
              <div className="text-4xl font-bold">{details.title}</div>
              <div className="">{details.addrFull}</div>
              <div className="py-4">
                <div className="text-3xl font-bold">Description</div>
                <div className="text-sm">{description}</div>
              </div>

              <CardProp title="Property Amenities" data={amenities[0]} />
              <CardProp
                title="Food Menu"
                data={
                  details.food === "Veg/Non-Veg"
                    ? ["Veg", "Non-Veg"]
                    : [details.food]
                }
              />
              <CardProp title="Property Rules" data={rules} />
            </span>

            <span className="col-span-6">
              <div className="p-16">
                <div className="rounded-2xl bg-white shadow-2xl py-8">
                  <div className="text-4xl text-center font-bold">
                    Rs. {details.price}/month
                  </div>
                  <div className="grid grid-cols-1 justify-items-center my-12 gap-2">
                    <div className="font-semibold">Date</div>
                    <div className="bg-black text-white rounded-full py-2 px-3 flex z-20">
                      <DatePicker
                        selected={date}
                        onChange={(date: Date) => setDate(date)}
                        minDate={today}
                        className=" border-none outline-none bg-black text-xl block text-center"
                        dateFormat="dd/MM/yyyy"
                      />
                    </div>
                    <div className="">All utilities are included</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="text-center mx-auto text-xs">
                      <div className="bg-black text-white rounded-full py-2 px-8 w-52 hover:bg-blue-600">
                        Schedule meeting
                      </div>
                    </span>
                    <span className="text-center mx-auto text-xs">
                      <Dropdown>
                        <DropdownTrigger>
                          <Button
                            variant="bordered"
                            className="bg-black text-white rounded-full py-2 px-8 w-52 hover:bg-blue-600"
                          >
                            Contact Owner
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                          aria-label="Static Actions"
                          className="bg-slate-100 p-4 border-2 rounded-lg mt-1 shadow-lg"
                        >
                          <DropdownItem key="name">
                            <span className="font-semibold text-lg">
                              Name: {details.contact.name}
                            </span>
                            <hr />
                          </DropdownItem>

                          <DropdownItem key="number">
                            <span className="text-sm">
                              Whatsapp: {details.contact.number}
                            </span>
                          </DropdownItem>
                          <DropdownItem key="email">
                            <span className="text-sm">
                              Email: {details.contact.email}
                            </span>
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </span>
                  </div>

                  <div className="px-16 text-xs text-center my-4">
                    When you schedule this meeting, the PG owner will reach out
                    to you.
                  </div>
                </div>
              </div>

              <div className="p-16">
                <div className="rounded-2xl bg-white shadow-2xl p-4 border-2 border-black ">
                  <div className="text-2xl font-bold mb-2">
                    Rooms offered by this property
                  </div>
                  <div className="flex w-full flex-col">
                    <div className="border-1 border-black" />
                    <Tabs aria-label="Dynamic tabs" items={tabs}>
                      {(item) => (
                        <Tab
                          key={item.id}
                          title={item.label}
                          className={
                            item.offered === 1
                              ? "text-xs focus:font-bold focus:bg-slate-200"
                              : "text-xs focus:font-bold focus:bg-slate-200 hidden"
                          }
                        >
                          <div className="border-1 border-black" />
                          <Card>
                            <CardBody className="p-4 gap-4">
                              {/* {item.content} */}

                              <div className="flex flex-row ">
                                <span className="text-xl flex-1/2">
                                  {item.label}
                                </span>

                                <span className="flex flex-1 flex-row-reverse ">
                                  <span className="text-lg text-green-500 ">
                                    {item.price} / Bed
                                  </span>
                                  <span className="p-2">starts from</span>
                                </span>
                              </div>

                              <hr />
                              <div className="text-medium space-y-2">
                                <div className="font-semibold ">
                                  Room Amenities
                                </div>

                                <div className="flex flex-row flex-wrap text-sm">
                                  {item.amenities.length === 0 ? (
                                    <li className="w-1/3">Not listed</li>
                                  ) : (
                                    item.amenities.map((amenity, index) => {
                                      index = index + 1;
                                      return (
                                        <li key={index} className="w-1/3">
                                          {amenity}
                                        </li>
                                      );
                                    })
                                  )}
                                </div>
                              </div>

                              <hr />

                              <span className="text-xl text-green-500">
                                6 Tenants staying
                              </span>
                              <hr />

                              <div className="rounded-xl my-4 grid-cols-1">
                                <div className="bg-blue-100 w-full px-2 rounded-t-xl text-lg font-semibold">
                                  Renting terms
                                </div>
                                <div className="space-y-4 p-4">
                                  <div className="flex flex-row">
                                    <div className="w-full">Rent</div>
                                    <div className="w-full text-end">
                                      Rs {item.price - 1000} to{" "}
                                      {item.price + 1000}
                                    </div>
                                  </div>
                                  <div className="flex flex-row">
                                    <div className="w-full">
                                      Security Deposit
                                    </div>
                                    <div className="w-full text-end">
                                      {item.secdeposit === null
                                        ? "Not Found"
                                        : "Rs " + item.secdeposit}
                                    </div>
                                  </div>
                                  <div className="flex flex-row">
                                    <div className="w-full">Locking Period</div>
                                    <div className="w-full text-end">
                                      {item.locking === null
                                        ? "Not Found"
                                        : item.locking}
                                    </div>
                                  </div>
                                  <div className="flex flex-row">
                                    <div className="w-full">Notice Period</div>
                                    <div className="w-full text-end">
                                      30 days
                                    </div>
                                  </div>
                                </div>

                                <hr />
                              </div>
                            </CardBody>
                          </Card>
                        </Tab>
                      )}
                    </Tabs>
                  </div>
                </div>
              </div>
            </span>
          </div>

          <div className="w-full">
            <div className="p-4 text-4xl font-bold text-center">Location</div>
          </div>

          <div className="w-full">
            <Footer />
          </div>
        </div>
      </main>
    );
}

export default function Details() {
  return (
    <Suspense fallback={<Loader />}>
      <Display />
    </Suspense>
  );
}
