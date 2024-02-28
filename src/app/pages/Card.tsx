import Image from "next/image";

export default function Card({ image, head, body }) {
  return (
    <div className="p-8 space-y-4 bg-white rounded-3xl shadow-lg text-left">
      <Image src={image} alt="..." className="w-[80px] aspect-square" />
      <div className="text-xl font-bold">{head}</div>
      <div className="text-normal">{body}</div>
    </div>
  );
}
