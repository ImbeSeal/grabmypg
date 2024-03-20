import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { CardProp } from "./Card";

export default function Details({
  searchParams,
}: {
  searchParams: {
    propName: any;
    address: any;
    price: any;
    propImage: any;
    categories: any;
    foodOptions: any;
    roommateCount: any;
    genders: any;
  };
}) {
  return (
    <main className="bg-white bg-opacity-55 text-black flex justify-center">
      <div className="bg-[#F0F0F0]  max-w-[1440px]">
        <div className="bg-white">
          <Navbar />
        </div>

        <div className="w-full overflow-hidden grid grid-cols-1">
          <Image
            src={searchParams.propImage}
            alt="..."
            width={9000}
            height={9000}
            className="w-full rounded-lg"
          />
        </div>

        <div className="grid grid-cols-2">
          <div className="p-12 space-y-4">
            <div className="text-4xl font-bold">{searchParams.propName}</div>
            <div className="">{searchParams.address}</div>
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
            <CardProp title="Food Menu" data={searchParams.foodOptions} />
            <CardProp title="Property Rules" data={searchParams.foodOptions} />
          </div>

          <div className="">Hello</div>
        </div>

        <div className="w-full">
          <div className="p-4 text-4xl font-bold text-center">Location</div>
        </div>
      </div>
    </main>
  );
}
