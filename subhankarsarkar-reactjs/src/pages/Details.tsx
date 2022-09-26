import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cart } from "../components/Cart";
import { useAppSelector } from "../store/hooks";
import { IproductItemsProps } from "./Home";

 
export const Details = () => {
  const Products = useAppSelector(state=>state.app.products);
  
  const [product,setProduct]=useState<IproductItemsProps>()
  const {id}=useParams();

  useEffect(()=>{
    
      let Product=Products.filter((e)=>{
       return e._id===id
      })

      console.log(Product)
      setProduct(Product[0])
    
  },[id,Products])

  return <div className="w-80 m-auto mt-10 text-center font-medium text-xl">Details
    {
      product && <Cart item={product}></Cart>
    }
    
    {/* <button className="border-solid border-2 bg-red-600 p-1 border-indigo-600 rounded-md" >ddsk</button> */}
  </div>;
};
