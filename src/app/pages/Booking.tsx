import { PropCard } from "./CardProperty";

export function Booking() {
  return (
    <div className="bg-[#F0F0F0]">
      <div className="w-2/3 bg-white rounded-[24px] shadow-lg">
        <PropCard uid="1" />
        <PropCard uid="2" />
        <PropCard uid="3" />
      </div>
    </div>
  );
}
