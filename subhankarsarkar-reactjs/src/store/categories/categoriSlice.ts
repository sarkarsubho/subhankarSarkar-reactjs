import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Statues } from "../products/productSlice";

export type IcategoryProps = {
  createdAt: string;
  name: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

type IinitialState = {
  stateus: string;
  categories: IcategoryProps[];
};

const initialState: IinitialState = {
  stateus: "ok",
  categories: [],
};

const categoriSlice = createSlice({
  name: "categori",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state, action) => {
        state.stateus = Statues.LOADING;
      })
      .addCase(
        fetchCategory.fulfilled,
        (state, action: PayloadAction<IcategoryProps[]>) => {
          state.categories = action.payload;
          state.stateus = Statues.IDEL;
        }
      )
      .addCase(fetchCategory.rejected, (state, action) => {
        state.stateus = Statues.ERROR;
      });
  },
});

export default categoriSlice.reducer;

export const fetchCategory = createAsyncThunk("category/fetch", () => {
  let config = {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhcmthcnNhYnlAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL3NhcmthcnN1YmhvIiwiaWF0IjoxNjYzOTk2NzQ2LCJleHAiOjE2NjQ0Mjg3NDZ9.YDCqLKwlPW82FoYghm2USeZR9dI-Todwle6AE3Bt7do",
    },
  };

  return axios
    .get(
      "https://upayments-studycase-api.herokuapp.com/api/categories/",
      config
    )
    .then((res) => {
      console.log(res.data);
      return res.data.categories;
    });
});
