import React from "react";

import { IproductItemsProps } from "../pages/Home";
export const Cart = ({ item }: { item: IproductItemsProps }) => {
  return (
    <div
      key={item._id}
      className="  border-solid border-2 border-blue-300 rounded-xl ">
      <img
        className="h-96 w-96 rounded-t-xl m-auto inline"
        src={item.avatar}
        alt="img"
      ></img>
      <div className="bg-slate-200 h-auto rounded-xl">
        <p className="font-bold">{item.name}</p>
        
        <p className="">{item.description}</p>
        <h1> Price:- ₹ {item.price}</h1>
        
      </div>
    </div>
  );
};
