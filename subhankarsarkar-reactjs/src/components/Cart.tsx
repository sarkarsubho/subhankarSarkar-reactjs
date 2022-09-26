import React from "react";
import { Link } from "react-router-dom";
import { IproductItemsProps } from "../pages/Home";
import { useAppDispatch } from "../store/hooks";
import { addToFavorite } from "../store/products/productSlice";
export const Cart = ({ item }: { item: IproductItemsProps }) => {
  const dispatch = useAppDispatch();

  return (
    <div
      key={item._id}
      className="w-full  border-solid border-2 border-blue-300 rounded-xl rounded-b-none"
    >
      <div
        className="absolute cursor-pointer"
        onClick={() => {
          dispatch(addToFavorite(item));
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/4340/4340223.png"
          className="  w-6 rounded-full"
          alt="favorite icon"
        ></img>
      </div>
      <Link to={`/product/${item._id}`}>
        <img
          className="h-96 w-full rounded-t-xl m-auto inline"
          src={item.avatar}
          alt="img"
        ></img>
        <div className="bg-slate-200 h-auto rounded-xl rounded-b-none pl-3 pt-3">
          <p className="font-bold">{item.name}</p>

          <p className="">{item.description}</p>
          <h1> Price:- ₹ {item.price}</h1>
        </div>
      </Link>
    </div>
  );
};
