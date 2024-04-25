import { useState } from "react";
import Image from "next/image";
import Arrow from "../app/assets/icons/menu-nav.svg";

interface AccordionProps{
  title: string;
  content:string;
  index:number;
}


const Accordion = ({ title, content, index }:AccordionProps) => {
  const [active, setActive] = useState< number | null>(null);
  const handleToggle = (index:number) => {
    active === index ? setActive(null) : setActive(index);
  };

  return (
    <div className="m-0 p-0 w-full">
      <div className="flex flex-col">
        <div className="flex justify-between items-center gap-3 my-2">
          <p
            className={
              active === index
                ? "text-darkBlue text-xl font-bold cursor-pointer"
                : "text-DarkGrayishBlue text-xl cursor-pointer"
            }
            onClick={() => handleToggle(index)}
          >
            {title}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            onClick={() => handleToggle(index)}
            className={
              active === index
                ? "cursor-pointer w-[24px] rotate-180"
                : "cursor-pointer w-[24px]"
            }
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </div>
        {/* <hr
          className={
            active === index
              ? "border-b-1 border-LightGrayishBlue relative top-[50px]"
              : "border-b-1 border-LightGrayishBlue relative top-[8px]"
          }
        ></hr> */}
      </div>

      <p
        onClick={() => handleToggle(index)}
        className={
          active === index
            ? "text-DarkGrayishBlue cursor-pointer"
            : "invisible max-h-0"
        }
      >
        {content}
      </p>
    </div>
  );
};

export default Accordion;
