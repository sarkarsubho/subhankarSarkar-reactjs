import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { IcategoryProps } from "../store/categories/categoriSlice";
import { useAppSelector } from "../store/hooks";

export const Navbar = () => {
  const Categories = useAppSelector((state) => state.categori.categories);
  const [searchParams, setSearchParams] = useSearchParams();

  const urlCategory = searchParams.get("category");
  const [category, setCategory] = useState(urlCategory || "all");
  //   let currentCategory = "all";

  const handleCategory = (val) => {
    console.log(val);
    setCategory(val);
  };
  useEffect(() => {
    let params = {};
    params.category = category;
    setSearchParams(params);
  }, [category]);
  return (
    <div className="flex p-4 justify-between shadow-xl">
      <img
        src="https://images.unsplash.com/photo-1544216291-b1dc4f7c8735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        className="w-16 "
        alt="logo"
      />
      <div className="flex gap-6 justify-center">
        <p
          className={`text-xl text-${category === "all" ? "red" : "white"}-500`}
          onClick={() => handleCategory("all")}
        >
          All
        </p>
        {Categories.map((categori: IcategoryProps) => {
          return (
            <div
              key={categori._id}
              onClick={() => handleCategory(categori.name)}
            >
              <p
                className={`text-xl text-${
                  categori.name === category ? "red" : "white"
                }-500`}
              >
                {categori.name}
              </p>
            </div>
          );
        })}
      </div>
      <Link to="/createnew">
        <button className="bg-red-900 text-white text-xl p-2 rounded-lg active:opacity-70">
          Add New
        </button>
      </Link>
    </div>
  );
};