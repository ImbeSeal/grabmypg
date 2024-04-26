import Image, { StaticImageData } from "next/image";

interface CardProps{
  image:StaticImageData;
  head: string;
  body: string;
}

export default function Card({ image, head, body }:CardProps) {
  return (
    <div className="p-8 space-y-4">
      <div className="w-full">
        <Image src={image} alt="..." className="w-[80px] aspect-square" />
      </div>
      <div className="text-xl font-bold">{head}</div>
      <div className="text-normal">{body}</div>
    </div>
  );
}
