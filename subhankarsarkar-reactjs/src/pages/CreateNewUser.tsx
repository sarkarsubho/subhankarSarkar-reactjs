import React, { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { createProduct } from "../store/products/productSlice";
// import { IcreateItem } from "../store/products/productSlice";
 interface IcreateItem {
   avatar: string;
   category: string;
   description: string;
   developerEmail: string;
   name: string;
   price: number;
   
 }
export const CreateNewUser = () => {
   const dispatch=useAppDispatch();
  const [data, setData] = useState({

  });

  let handleChange = (e: any) => {
    let { name, value } = e;
    // console.log(name,value)
    setData({ ...data, [name]: value });
  };
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    console.log(data)
    dispatch(createProduct(data))
  }
  console.log(data);
  return (
    <div className="w-100 bg-slate-200  text-center h-screen pt-20">
      
      <form className="bg-red-200 w-96 flex flex-col w-92 p-10 pt-0 justify-center m-auto rounded-lg" onSubmit={(e)=>handleSubmit(e)}>
      <h1 className="fontSize-xl font-serif text-3xl"> Create New User</h1>
        <div className="">
          <legend className="text-left text-lg mt-2">Name</legend>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              handleChange(e.target);
            }}
            className="border-solid border-2 border-black rounded-lg w-100 p-2 w-full text-lg "
          />
        </div>
        <div>
          <legend className="text-left text-lg mt-2">Price</legend>
          <input
            type="number"
            name="price"
            onChange={(e) => {
              handleChange(e.target);
            }}
            className="border-solid border-2 border-black rounded-lg w-100 p-2 w-full text-lg "
          />
        </div>
        <div>
          <legend className="text-left text-lg mt-2">Category</legend>

          <select
            name="category"
            onChange={(e) => {
              handleChange(e.target);
            }}
            className="border-solid border-2 border-black rounded-lg w-100 p-2 w-full text-lg "
          >
            <option value="">select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Accessories">Accessories</option>
            <option value="Furniture">Furniture</option>
            <option value="Hobby">Hobby</option>
          </select>
        </div>
        <div>
          <legend className="text-left text-lg mt-2">Description</legend>
          <input
            name="description"
            className="border-solid border-2 border-black rounded-lg w-100 p-2 w-full text-lg "
            type="text"
            onChange={(e) => {
              handleChange(e.target);
            }}
          />
        </div>

        <div>
          <legend className="text-left text-lg mt-2">DeveloperEmail</legend>
          <input
            name="developerEmail"
         
            className="border-solid border-2 border-black rounded-lg w-100 p-2 w-full text-lg "
            type="email"
            onChange={(e) => {
              handleChange(e.target);
            }}
          />
        </div>
        <div>
          <legend className="text-left text-lg mt-2">Avater</legend>
          <input
            name="avatar"
            className="border-solid border-2 border-black rounded-lg w-100 p-2 w-full text-lg "
            type="text"
            onChange={(e) => {
              handleChange(e.target);
            }}
          />
        </div>
        <input
          className="cursor-pointer border-2 border-cyan-500 mt-6 bg-cyan-400 p-1 rounded-lg text-white font-semibold text-lg"
          type={"submit"} 
        ></input>
      </form>
    </div>
  );
};
