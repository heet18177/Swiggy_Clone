import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";

export const Resto = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [slids, setSlids] = useState(0);

  const fetchRestaurants = async () => {
    const res = await fetch("http://localhost:5000/top-restaurant-chains");
    const apidata = await res.json();
    setRestaurants(apidata);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const leftSide = () => {
    if (slids === 0) return false;
    setSlids(slids - 2);
  };

  const rightSide = () => {
    if (restaurants.length - 4 == slids) return false;
    setSlids(slids + 2);
  };

  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex items-center justify-between my-3">
        <div className="text-[25px] font-bold mt-2">
          Top restaurants in jodhpur
        </div>
        <div className="flex">
          <div className="flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-slate-200 rounded-full mx-2 ">
            <FaArrowLeft onClick={leftSide} />
          </div>
          <div className="flex cursor-pointer justify-center items-center  w-[30px] h-[30px] bg-slate-200 rounded-full mx-2 ">
            <FaArrowRight onClick={rightSide} />
          </div>
        </div>
      </div>
      <div className="flex gap-2 overflow-hidden">
        {restaurants.map((res, index) => {
          return (
            <>
              <div
                key={index}
                style={{ transform: `translateX(-${slids * 100}%)` }}
                className="w-full duration-500 "
              >
                <Card {...res} key={index} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Resto;
