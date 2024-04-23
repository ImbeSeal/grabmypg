"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { CardProp } from "./Card";
import { useRouter, useSearchParams } from "next/navigation";
import { doc, getDocs, collection, query, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Carousel from "@/components/Carousel";

import hostel2 from "../assets/hostel-bg.jpg";

export default function Details() {
  const [date, setDate] = useState(new Date());
  const today = new Date();

  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [details, setDetailsData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const docRef = doc(db, "PG", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDetailsData(docSnap.data());
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
    return <div>Loading...</div>;
  }

  if (!details) {
    return <p>Details not found.</p>;
  }


  return (
    <main className="bg-white bg-opacity-55 text-black flex justify-center">
      <div className="bg-[#F0F0F0]  max-w-[1440px]">
        <div className="bg-white">
          <Navbar />
        </div>

        <div className="w-full overflow-hidden grid grid-cols-1 p-12">
          <Carousel images={details.images} />
          {/* <Image
            src={details.displayImage}
            alt="..."
            width={9000}
            height={9000}
            className="w-full rounded-lg"
          /> */}
        </div>

        <div className="grid grid-cols-2">
          <div className="p-12 space-y-4">
            <div className="text-4xl font-bold">{details.title}</div>
            <div className="">{details.addrFull}</div>
            <div className="py-4">
              <div className="text-3xl font-bold">Description</div>
              <div className="text-sm">
                A truly global city, Delhi has long been considered a
                cutting-edge metropolis and hub for culture, style and finance.
                With each borough, Tube zone and neighborhood of Delhi sporting
                its own vibe and lifestyle advantages, it can be downright
                difficult to settle on where to look for a furnished apartment
                in Delhi . Whether you’re a digital nomad looking for a studio
                apartment in Delhi or just seeking a month to month rental in
                Delhi, Blueground has you covered.
              </div>
            </div>

            <CardProp title="Property Amenities" data="" />
            <CardProp title="Food Menu" data={details.food} />
            <CardProp title="Property Rules" data={details.food} />
          </div>

          <div className="p-16">
            <div className="rounded-2xl bg-white shadow-2xl py-8">
              <div className="text-4xl text-center font-bold">
                Rs. {details.price}/month
              </div>
              <div className="grid grid-cols-1 justify-items-center my-12 gap-2">
                <div className="font-semibold">Date</div>
                <div className="bg-black text-white rounded-full py-2 px-3 flex">
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    minDate={today}
                    className=" border-none outline-none bg-black text-xl block text-center"
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
                <div className="">All utilities are included</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="text-center px-16 text-xs">
                  <div className="bg-black text-white rounded-full py-2 px-8">
                    Schedule meeting
                  </div>
                </div>
                <div className="text-center px-16 text-xs">
                  <div className="bg-black text-white rounded-full py-2 px-8">
                    Contact owner
                  </div>
                </div>
              </div>

              <div className="px-16 text-xs text-center my-4">
                When you schedule this meeting, the PG owner will reach out to you.
              </div>
            </div>
          </div>
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
