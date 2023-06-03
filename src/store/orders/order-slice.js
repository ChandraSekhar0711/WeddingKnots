import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {
    orderList: [],
  },
  reducers: {
    setOrderList: (currentSlice, action) => {
      currentSlice.orderList = action.payload;
    },
    createOrder: (currentSlice, action) => {
      currentSlice.orderList.push(action.payload);
    },
  },
});

export const { setOrderList,createOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;