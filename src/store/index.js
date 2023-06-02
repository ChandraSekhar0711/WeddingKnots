import { configureStore } from "@reduxjs/toolkit";
import { notesReducer } from "./notes/notes-slice";
import { orderReducer } from "./orders/order-slice";

export const store = configureStore({
  reducer: {
    notesSlice: notesReducer,
    orderSlice: orderReducer,
  },
});