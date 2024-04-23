import Link from "next/link";
import Image from "next/image";

import menu from "../app/assets/icons/menu-nav.svg";

export function AdminNav() {
  return (
    <nav className="w-full bg-[#F0F0F0]">
      <div className="grid grid-cols-2 font-semibold">
        <div className="flex p-4">
          <Link href={"../"} className="px-3">
            Home
          </Link>
          <Link href={"../AddEntry"} className="px-3">
            Add New Property
          </Link>
        </div>
        <div className="flex flex-row-reverse p-4">
          <Link href={"#"} className="px-3 hidden">
            <Image src={menu} alt="Menu Button" className="w-8 h-8" />
          </Link>
          {/* <Link href={"../app/Details"} className="px-3">
            Login/Sign up
          </Link> */}
          <div className="px-3">Hello Chirag!</div>
        </div>
      </div>
    </nav>
  );
}
