import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const Catagory = () => {
  const [categories, setCategories] = useState([]);
  const [slide, setSlide] = useState(0);

  const fatchCatagory = async () => {
    const res = await fetch("http://localhost:5000/categories");

    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fatchCatagory();
  }, []);

  const NextSlide = () => {
    console.log("categories.length", categories.length);
    if (categories.length - 8 == slide) return false;
    setSlide(slide + 3);
  };

  const PrevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide - 3);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between my-3">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex">
          <button
            className="flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-slate-200 rounded-full mx-2 "
            onClick={PrevSlide}
          >
            <FaArrowLeft />
          </button>
          <button
            className="flex cursor-pointer justify-center items-center  w-[30px] h-[30px] bg-slate-200 rounded-full mx-2 "
            onClick={NextSlide}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {categories.map((cat, index) => {
          return (
            <div
              key={index}
              style={{ transform: `translateX(-${slide * 100}%)` }}
              className="w-[150px] shrink-0 duration-500"
            >
              <img src={"http://localhost:5000/images/" + cat.image} alt="" />
            </div>
          );
        })}
      </div>
      <hr className="mt-4 border-2" />
    </div>
  );
};

export default Catagory;
