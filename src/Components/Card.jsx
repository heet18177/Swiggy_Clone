import React from "react";
import { IoStarSharp } from "react-icons/io5";

export const Card = (props) => {
  console.log("props", props);
  return (
    <div className="flex-col">
      <div className="w-[280px] h-[190px] relative shrink-0 grow">
        <div className="w-full h-full overflow-hidden rounded-[15px]">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/images/` + props.image}
            alt="Restaurant"
            className="w-full h-full object-cover rounded-[15px] hover:scale-105 duration-300"
            loading="lazy"
          />
        </div>
        <div className="image-over absolute top-0 flex items-end w-full h-full p-1 font-bold text-[20px] justify-center text-white image-over tracking-tighte">
          {props.offer}
        </div>
      </div>
      <div className="p-1 bg-white rounded-b-[15px]">
        <div className="text-[18px] font-bold">{props.title}</div>
        <div className="flex gap-1 text-[15px] font-bold items-center">
          <div>
            <IoStarSharp />
          </div>
          <div>{props.rating}</div>
          <div>{props.minTime}-</div>
          <div>{props.maxTime} mins</div>
        </div>
        <div className="text-gray-600">{props.name}</div>
        <div className="text-gray-600">{props.place}</div>
      </div>
    </div>
  );
};

export default Card;
