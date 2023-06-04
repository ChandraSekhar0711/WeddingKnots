import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {
    orderList: [],
  },
  reducers: {
    setOrderList: (state, action) => {
      state.orderList = action.payload;
    },
    createOrder: (state, action) => {
      console.log(action.payload);
      state.orderList.push(action.payload);
    },
    deleteOrder: (state, action) => {
      const filteredOrderList = state.orderList.filter(
        (order) => order.id !== action.payload.id
      );
      state.orderList = filteredOrderList;
    },
  },
});

export const { setOrderList, createOrder, deleteOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
