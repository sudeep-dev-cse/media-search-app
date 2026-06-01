import { configureStore } from "@reduxjs/toolkit";
import  searchSlice  from "./features/searchSlice";
import collectionReducer from "./features/collectionSlice"

export const store = configureStore({
    reducer:{
       search:searchSlice ,
    collection:collectionReducer
    }
})
