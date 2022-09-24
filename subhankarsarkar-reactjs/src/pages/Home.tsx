
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks"; 
 import { fetchProduct } from "../store/products/productSlice"; 
export type IproductItemsProps ={
    avatar: string;
    category: string;
    description: string;
    developerEmail: string;
    name: string;
    price: number;
    _id: string;
  }
export const Home = () => {
    const Products=useAppSelector(state=>state.app.products);
    const dispach=useAppDispatch();
  

  useEffect(() => {
    dispach(fetchProduct())
  }, [dispach]);

  return <div>

    {Products.map((e:IproductItemsProps)=>{
        return <div>
            <img src={e.avatar} alt="img"></img>
            <p>{e.name}</p>
        </div>
    })}
  </div>;
};
