import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Cart } from "../components/Cart";
import { Navbar } from "../components/Navbar";

import {
  fetchCategory,
  IcategoryProps,
} from "../store/categories/categoriSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProduct } from "../store/products/productSlice";
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
  const dispach = useAppDispatch();
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
    dispach(fetchProduct());
    dispach(fetchCategory());
  }, [dispach]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-4 gap-6  mx-auto p-10 text">
        {data.map((e: IproductItemsProps) => {
          return (
            <Link to={`/product/${e._id}`} key={e._id}>
              <Cart item={e}></Cart>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
