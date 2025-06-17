import React, { useEffect, useState } from "react";
import Card from "./Card";

export const Delivery = () => {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const res = await fetch("http://localhost:5000/top-restaurant-chains");
    const apidata = await res.json();
    setRestaurants(apidata);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div>
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex items-center justify-between my-3">
          <div className="text-[25px] font-bold mt-2">
            restaurants with onlinr food delivery in jodhpur
          </div>
        </div>
      </div>
      {
        restaurants.map((rest , index) => {
            return(
                <div>
                    <Card {...rest} key={index}/>
                </div>
            )
        })
      }
    </div>
  );
};
