import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { sendOrder, updateTableStatus } from "../../firebase";

const initialState = {
  table: null,
  userOrder: JSON.parse(sessionStorage.getItem('userOrder')) || [],
}

export const submitOrder = createAsyncThunk(
  'user/submitOrder',
  async (_, { getState }) => {
    const state = getState();
    const tableNumber = state.user.table.number;
    const userOrders = state.user.userOrder;
    const orderStatus = "pending";

    const prop = { tableNumber, userOrders, orderStatus };
    const totalAmount = userOrders.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

    sendOrder({ ...prop, totalAmount });
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    selectTable: (state, action) => {
      state.table = action.payload;
      updateTableStatus(action.payload.number, false);

      if (state.timeoutId) {
        clearTimeout(state.timeoutId);
      }

      const timeoutId = setTimeout(() => {
        updateTableStatus(action.payload.number, true);
        state.table = null;
      }, 300000);

      state.timeoutId = timeoutId;
    },
    addToUserOrder: (state, action) => {
      const existingItemIndex = state.userOrder.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        state.userOrder[existingItemIndex].quantity += action.payload.quantity;
      } else {
        state.userOrder.push(action.payload);
      }
      sessionStorage.setItem('userOrder', JSON.stringify(state.userOrder));
    },
    removeFromUserOrder: (state, action) => {
      state.userOrder = state.userOrder.filter(item => item.id !== action.payload.id);
      sessionStorage.setItem('userOrder', JSON.stringify(state.userOrder));
    },
    updateUserOrderQuantity: (state, action) => {
      const item = state.userOrder.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      sessionStorage.setItem('userOrder', JSON.stringify(state.userOrder));
    },
  }
})

export default userSlice.reducer;
export const { selectTable, addToUserOrder, removeFromUserOrder, updateUserOrderQuantity } = userSlice.actions;