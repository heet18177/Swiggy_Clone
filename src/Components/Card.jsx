import React from "react";

export const Card = (props) => {
  console.log("props", props);
  return (
    <>
      <div className="w-[280px] h-[190px] relative shrink-0 grow">
        <div className="w-full h-full overflow-hidden rounded-[15px]">
          <img
            src={"http://localhost:5000/images/" + props.image}
            alt="Restaurant"
            className="w-full h-full object-cover rounded-[15px] hover:scale-105 duration-300"
            loading="lazy"
          />
        </div>
        <div className="image-over absolute top-0 flex items-end w-full h-full p-1 font-bold text-[20px] justify-center text-white image-over tracking-tighte">
          {props.offer}
        </div>
      </div>
      <div className="bottom-0 left-0 right-0 p-2 bg-white rounded-b-[15px]">
        <div className="text-[16px] font-semibold">{props.title}</div>
        <div className="text-[14px] text-gray-600">{props.rating}</div>
      </div>
    </>
  );
};

export default Card;
