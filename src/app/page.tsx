import Image from "next/image";
import Link from "next/link";

import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";

import Hero from "../components/Hero";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="bg-white bg-opacity-55 text-black flex justify-center">
        <div className="max-w-[1440px] ">
          <Navbar />
          <Hero />
          <Footer />
        </div>
      </main>
    </NextUIProvider>
  );
}
