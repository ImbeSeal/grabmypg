import Image from "next/image";
import Link from "next/link";

import Hero from "./pages/Hero";
import Contact from "./pages/Contact";
import { Navbar } from "./pages/Navbar";
import { Landlord } from "./pages/Landlord";
import { Booking } from "./pages/Booking";

export default function Home() {
  return (
    <main className="bg-white bg-opacity-55 text-black flex justify-center">
      <div className="max-w-[1440px] ">
        <Navbar />
        <Booking />
      </div>
    </main>
  );
}
