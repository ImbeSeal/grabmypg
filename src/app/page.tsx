import Image from "next/image";
import Link from "next/link";

import Hero from "./pages/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-white bg-opacity-55 text-black flex justify-center">
      <div className="max-w-[1440px] ">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
