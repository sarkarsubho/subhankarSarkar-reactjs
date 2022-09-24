import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios";
export interface IinitState{
    products:[];
    status:string
}
// export interface IProductSliceProps{
//     name:string;
//     initialState:IinitState;
//     reducers:{}
// }
export const Statues = Object.freeze({
    IDEL: "idel",
    ERROR: "error",
    LOADING: "loading",
  });
const productSlice =createSlice({
    name:"product",
    initialState:{
        products:[],
        status:"ok"
    },
    reducers:{},
    extraReducers:(builder)=> {
        builder
    
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = Statues.LOADING;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.products=action.payload;
        state.status = Statues.IDEL;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = Statues.ERROR;
      });
    },
})

// export const {} = productSlice.actions;
export default productSlice.reducer;

export const fetchProduct = createAsyncThunk ("product/fetch", async ()=> {
    let config = {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhcmthcnNhYnlAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL3NhcmthcnN1YmhvIiwiaWF0IjoxNjYzOTk2NzQ2LCJleHAiOjE2NjQ0Mjg3NDZ9.YDCqLKwlPW82FoYghm2USeZR9dI-Todwle6AE3Bt7do",
        },
      };
    // const res = await fetch(`https://fakestoreapi.com/products`);
    // let data = await res.json();
    // return data;
   let data= axios
      .get("https://upayments-studycase-api.herokuapp.com/api/products", config)
      .then((res) => {
        console.log(res.data);
        return res.data.products
      });
      return data;
  });