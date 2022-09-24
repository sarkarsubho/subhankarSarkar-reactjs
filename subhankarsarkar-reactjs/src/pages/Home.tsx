import axios from "axios";
import { useEffect,useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import { fetchProduct } from "../store/productSlice";
export interface IproductItemsProps {
    avatar: string;
    category: string;
    createdAt: string;
    description: string;
    developerEmail: string;
    name: string;
    price: number;
    updatedAt: string;
    __v: number;
    _id: string;
  }
export const Home = () => {
    // const data=useSelector(state=>state.app.products);
    const dispach=useDispatch();
  const [Products,setProducts]=useState([])
  let config = {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhcmthcnNhYnlAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL3NhcmthcnN1YmhvIiwiaWF0IjoxNjYzOTk2NzQ2LCJleHAiOjE2NjQ0Mjg3NDZ9.YDCqLKwlPW82FoYghm2USeZR9dI-Todwle6AE3Bt7do",
    },
  };

  useEffect(() => {
    // axios
    //   .get("https://upayments-studycase-api.herokuapp.com/api/products", config)
    //   .then((res) => {
    //     console.log(res.data);
    //     setProducts(res.data.products)
    //   });
    dispach(fetchProduct())
  }, []);

  return <div>

    {Products.map((e:IproductItemsProps)=>{
        return <div>
            <img src={e.avatar}></img>
            <p>{e.name}</p>
        </div>
    })}
  </div>;
};
