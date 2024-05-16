import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  orders: null,
  error: null
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    removeOrder: (state, action) => {
      delete state.orders[action.payload];
    },
  }
})

export default ordersSlice.reducer;
export const { setOrders, removeOrder } = ordersSlice.actions;