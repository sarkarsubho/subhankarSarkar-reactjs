import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type IproductItemsProps = {
  avatar: string;
  category: string;
  description: string;
  developerEmail: string;
  name: string;
  price: number;
  _id: string;
};
export interface IcreateItem {
  avatar: string;
  category: string;
  description: string;
  developerEmail: string;
  name: string;
  price: number;
}

type InitialState = {
  status: string;
  products: IproductItemsProps[];
  favorites: IproductItemsProps[];
};

export const Statues = Object.freeze({
  IDEL: "ok",
  ERROR: "error",
  LOADING: "loading",
});
const initialState: InitialState = {
  status: "ok",
  products: [],
  favorites: JSON.parse(`${localStorage.getItem("favorites")}`) || [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<IproductItemsProps>) => {
      let flag = state.favorites.find(
        (e: IproductItemsProps) => action.payload._id === e._id
      );
      if (flag) {
        alert("item is already added");
        return;
      }
      alert("Item is added to Favorite");
      state.favorites.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        ({ _id }) => _id !== action.payload
      );
    },
    removeFavorite:(state,action:PayloadAction<string>)=>{
      state.favorites = state.favorites.filter(
        ({ _id }) => _id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    }
    
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchProduct.pending, (state, action) => {
        state.status = Statues.LOADING;
      })
      .addCase(
        fetchProduct.fulfilled,
        (state, action: PayloadAction<IproductItemsProps[]>) => {
          state.products = action.payload;
          state.status = Statues.IDEL;
        }
      )
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = Statues.ERROR;
      });
  },
});

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

export const createProduct = createAsyncThunk("product/create", (data: {}) => {
  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhcmthcnNhYnlAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL3NhcmthcnN1YmhvIiwiaWF0IjoxNjYzOTk2NzQ2LCJleHAiOjE2NjQ0Mjg3NDZ9.YDCqLKwlPW82FoYghm2USeZR9dI-Todwle6AE3Bt7do",
    },
  };
  let body = JSON.stringify(data);
  return axios
    .post(
      "https://upayments-studycase-api.herokuapp.com/api/products",
      body,
      config
    )
    .then((res) => {
      console.log(res.data);
      return res.data.products;
    });
});
export const { addToFavorite, removeProduct ,removeFavorite } = productSlice.actions;
export default productSlice.reducer;
