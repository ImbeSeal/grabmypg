import Image from "next/image";
import Hero from "./pages/Hero";
import Contact from "./pages/Contact";
import { Navbar } from "./pages/Navbar";

export default function Home() {
  return (
    <main className="bg-white text-black flex justify-center">
      <div className="max-w-[1440px] ">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
