import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

type IproductItemsProps ={
  avatar: string;
  category: string;
  description: string;
  developerEmail: string;
  name: string;
  price: number;
  _id: string;
}

type InitialState ={
  status:string
  products:IproductItemsProps[]
}



export const Statues = Object.freeze({
  IDEL: "ok",
  ERROR: "error",
  LOADING: "loading",
});
const initialState : InitialState= {
 
  status: "ok", 
  products:[],
}




const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchProduct.pending, (state, action) => {
        state.status = Statues.LOADING;
      })
      .addCase(fetchProduct.fulfilled, (state, action: PayloadAction<IproductItemsProps[]>) => {
        state.products=action.payload;
        state.status = Statues.IDEL;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = Statues.ERROR ;
      });
  },
});

// export const {} = productSlice.actions;



export const fetchProduct = createAsyncThunk("product/fetch", () => {
  let config = {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhcmthcnNhYnlAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL3NhcmthcnN1YmhvIiwiaWF0IjoxNjYzOTk2NzQ2LCJleHAiOjE2NjQ0Mjg3NDZ9.YDCqLKwlPW82FoYghm2USeZR9dI-Todwle6AE3Bt7do",
    },
  };
  return axios
    .get("https://upayments-studycase-api.herokuapp.com/api/products", config)
    .then((res) => {
      console.log(res.data);
      return res.data.products;
    });
  
});
export default productSlice.reducer