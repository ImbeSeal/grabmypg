export function CardProp({ title, data }: { title: string; data: any }) {
  return (
    <div className="py-4">
      <div className="rounded-lg bg-gradient-to-b from-[#B594EC] to-[#8784FF] text-white px-4 py-1 text-xl shadow-xl">
        {title}
      </div>
      <div className="p-4">{data}</div>
    </div>
  );
}
