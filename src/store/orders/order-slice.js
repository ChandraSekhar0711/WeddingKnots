import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {
    orderList: [],
  },
  reducers: {
    setOrderList: (state, action) => {
      state.orderList = action.payload;
    },
  },
});

export const { setOrderList } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;