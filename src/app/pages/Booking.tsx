import { PropCard } from "./CardProperty";

export function Booking() {
  return (
    <div className="bg-[#F0F0F0]">
      <div className="w-2/3 ml-auto mr-12 py-3 grid grid-cols-1 gap-4">
        <a href="#">
          <PropCard uid="1" />
        </a>
        <a href="#">
          <PropCard uid="2" />
        </a>
        <a href="#">
          <PropCard uid="3" />
        </a>
      </div>
    </div>
  );
}
