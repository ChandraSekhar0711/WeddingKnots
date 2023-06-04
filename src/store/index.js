import { configureStore } from "@reduxjs/toolkit";
import { orderReducer } from "./orders/order-slice";

export const store = configureStore({
  reducer: {
    orderSlice: orderReducer,
  },
});