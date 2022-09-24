import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./productSlice";


const store=configureStore({
    reducer:{
        app: productSlice
    }
})

export default store;