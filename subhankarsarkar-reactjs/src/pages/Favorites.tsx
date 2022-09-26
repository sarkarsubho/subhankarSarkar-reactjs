import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../components/Cart";
import { useAppSelector } from "../store/hooks";
import { IproductItemsProps } from "./Home";

export const Favorites = () => {
  const Favorites = useAppSelector((state) => state.app.favorites);

  return (
    <div className="pt-3 pl-3">
       <Link to="/">
        <button className="bg-teal-600 text-white text-xl p-2 rounded-lg active:opacity-70">
       { " < Back to Home"}
        </button>
      </Link>
      <div className="grid grid-cols-4 gap-6  mx-auto p-10">
        {Favorites.map((item: IproductItemsProps) => {
        return (
          <div
            key={item._id}
            className="w-full  border-solid border-2 border-blue-300 rounded-xl "
          >
            <img
              className="h-96 w-full rounded-t-xl m-auto inline"
              src={item.avatar}
              alt="img"
            ></img>
            <div className="bg-slate-200 h-auto rounded-xl  pl-3 pt-3">
              <p className="font-bold">{item.name}</p>

              <p className="">{item.description}</p>
              <h1> Price:- ₹ {item.price}</h1>
            </div>
          </div>
        );
      })}
      </div>
      
    </div>
  );
};
