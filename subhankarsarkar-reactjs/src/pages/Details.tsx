import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cart } from "../components/Cart";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProductDetails } from "../store/products/productSlice";
import { IproductItemsProps } from "./Home";

export const Details = () => {
  const Products = useAppSelector((state) => state.app.products);
  const detailProduct = useAppSelector((state) => state.app.detailsItem);
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<IproductItemsProps>(detailProduct);
  const { id } = useParams();
 
  console.log(product)
  useEffect(()=>{
    setProduct(detailProduct)
  },[detailProduct])
  useEffect(() => {
    if (Products.length === 0) {
      dispatch(fetchProductDetails(`${id}`));
      console.log("data call from function call");
    } else {
      let Product = Products.filter((e) => {
        return e._id === id;
      });

      console.log(Product);
      setProduct(Product[0]);
      console.log("data call from filter")
    }
  }, [id, Products]);

  return (
    <div className="w-80 m-auto mt-10 text-center font-medium text-xl">
      Details
      {product && <Cart item={product}></Cart>}
      {/* <button className="border-solid border-2 bg-red-600 p-1 border-indigo-600 rounded-md" >ddsk</button> */}
    </div>
  );
};
