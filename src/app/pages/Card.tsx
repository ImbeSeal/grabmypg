import Image from "next/image";

export default function Card({ image, head, body }) {
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
