import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { productReducer } from "../reducers/productReducer";
// we will split data logicly for example the data about product alone and the data about shopping cart alone we use somthing called createSlice to do that

export const store = createStore(productReducer);
