
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../components/Cart";
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
        return <Link to={`/product/${e._id}`} key={e._id}>
          <Cart item={e}></Cart>
        </Link> 
    })}
  </div>;
};
