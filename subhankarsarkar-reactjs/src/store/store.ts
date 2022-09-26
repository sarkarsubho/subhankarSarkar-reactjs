import { configureStore } from "@reduxjs/toolkit";

import productReduser from "./products/productSlice";
import categoriReduser from "./categories/categoriSlice";
const store = configureStore({
  reducer: {
    app: productReduser,
    categori: categoriReduser,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
