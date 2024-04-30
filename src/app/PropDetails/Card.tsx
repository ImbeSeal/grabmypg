export function CardProp({ title, data }: { title: string; data: string[] }) {
  return (
    <div className="py-4">
      <div className="rounded-lg bg-gradient-to-b from-[#B594EC] to-[#8784FF] text-white px-4 py-1 text-xl shadow-xl">
        {title}
      </div>
      <div className="p-4 flex flex-row flex-wrap gap-4">
        {data.length === 0 ? (
          <ul className="w-1/4">Not listed</ul>
        ) : (
          data.map((item, index) => {
            index = index + 1;
            return (
              <ul key={index} className="w-1/4">
                {item}
              </ul>
            );
          })
        )}
      </div>
    </div>
  );
}
