import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Cart } from "../components/Cart";
import { Navbar } from "../components/Navbar";

import { fetchCategory } from "../store/categories/categoriSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProduct, removeProduct } from "../store/products/productSlice";
export type IproductItemsProps = {
  avatar: string;
  category: string;
  description: string;
  developerEmail: string;
  name: string;
  price: number;
  _id: string;
};
export const Home = () => {
  const Products = useAppSelector((state) => state.app.products);
  const [searchParams] = useSearchParams();
  const [data, setdata] = useState(Products);
  let categoty = searchParams.get("category");
  const dispatch = useAppDispatch();
  console.log("category from home ", categoty);

  useEffect(() => {
    if (categoty === "all" && Products) {
      setdata(Products);
    } else {
      let filteredData = Products.filter((e) => e.category === categoty);
      setdata(filteredData);
    }
  }, [categoty, Products]);

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-4 gap-6  mx-auto p-10 text">
        {data.map((e: IproductItemsProps) => {
          return (
            <div key={e._id}>
              <Cart item={e}></Cart>
              <button
                className="bg-red-900 w-full text-white text-xl p-2 rounded-lg rounded-t-none active:opacity-70"
                onClick={() => {
                  dispatch(removeProduct(e._id));
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
