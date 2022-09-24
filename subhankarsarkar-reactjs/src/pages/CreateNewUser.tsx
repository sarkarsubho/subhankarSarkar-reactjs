import React from "react";

export const CreateNewUser = () => {
  return <div className="w-100 grid place-items-center h-96">
    <h1> Create New User</h1> 
    <form className="bg-red-200 w-96 ">
         <div>
            <legend >Name</legend>
            <input type="text" className="border-solid border-2 border-black rounded-lg w-100" />
         </div>
         <div>
            <legend>Price</legend>
            <input type="text" className="" />
         </div>
         <div>
            <legend>Category</legend>
            <input type="text" />
         </div>
         <div>
            <legend>Description</legend>
            <input type="text" />
         </div>
         
         <div>
            <legend>DeveloperEmail</legend>
            <input type="text" />
         </div>
         <div>
            <legend>Avater</legend>
            <input type="File" />
         </div>
    </form>
  </div>;
};
