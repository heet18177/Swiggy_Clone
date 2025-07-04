import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";

export const Resto = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [slids, setSlids] = useState(0);

  const fetchRestaurants = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/top-restaurant-chains`
    );
    const apidata = await res.json();
    setRestaurants(apidata);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const leftSide = () => {
    if (slids === 0) return false;
    setSlids(slids - 3);
  };

  const rightSide = () => {
    if (restaurants.length - 4 == slids) return false;
    setSlids(slids + 3);
  };

  return (
    <div className=" md:max-w-[1200px] mx-auto ">
      <div className="flex items-center justify-between my-3">
        <div className="text-[25px] font-bold mt-2">
          Top restaurants in jodhpur
        </div>
        <div className="flex">
          <div
            onClick={leftSide}
            className="flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-slate-200 rounded-full mx-2 "
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={rightSide}
            className="flex cursor-pointer justify-center items-center  w-[30px] h-[30px] bg-slate-200 rounded-full mx-2 "
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-3 overflow-hidden">
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
      <hr className="mt-3 border-2 border-gray-200 " />
    
    </div>
  );
};

export default Resto;
