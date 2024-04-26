import Link from "next/link";
import Image from "next/image";

import menu from "../app/assets/icons/menu-nav.svg";

export function Navbar() {
  return (
    <nav className="w-full bg-[#F0F0F0]">
      <div className="grid grid-cols-2 font-semibold">
        <div className="flex p-4">
          <Link href={"../"} className="px-3">
            Home
          </Link>
          <Link href={"../Contact"} className="px-3">
            Contact
          </Link>
          <Link href={"../Landlord"} className="px-3">
            Post Property
          </Link>
        </div>
        <div className="flex flex-row-reverse p-4">
          <Link href={"#"} className="px-3 hidden">
            <Image src={menu} alt="Menu Button" className="w-8 h-8" />
          </Link>
          <Link href={"../app/Details"} className="px-3 hidden">
            Login/Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
