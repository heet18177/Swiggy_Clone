import React, { useEffect, useState } from "react";
import Card from "./Card";

export const Delivery = () => {
  const [restaurants, setRestaurants] = useState([]);

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

  return (
    <div>
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex items-center justify-between my-5">
          <div className="text-[25px] font-bold">
            Restaurants with online food delivery in jodhpur
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {restaurants.map((rest, index) => {
            return <Card {...rest} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
