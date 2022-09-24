import React from "react";

import { IproductItemsProps } from "../pages/Home";
export const Cart = ({item}:{item:IproductItemsProps}) => {
  return <div key={item._id}>
  <img src={item.avatar} alt="img"></img>
  <p>{item.name}</p>
</div>;
};
