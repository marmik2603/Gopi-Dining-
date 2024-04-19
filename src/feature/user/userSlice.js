import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { sendOrder } from "../../firebase";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  table: null,
  userOrder: [],
}

export const submitOrder = createAsyncThunk(
  'user/submitOrder',
  async (_, { getState }) => {
    const state = getState();
    const tableNumber = state.user.table.number;
    const userOrders = state.user.userOrder;
    const complete = false

    const prop = { id: uuidv4(), tableNumber, userOrders, complete };
    const resp = await sendOrder(prop);
    return resp;
  }
);
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    selectTable: (state, action) => {
      state.table = action.payload
    },
    addToUserOrder: (state, action) => {
      const existingItem = state.userOrder.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.userOrder.push({ id: action.payload.id, quantity: action.payload.quantity });
      }
    },
    removeFromUserOrder: (state, action) => {
      const existingItem = state.userOrder.find(item => item.id === action.payload.id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= action.payload.quantity;
      } else {
        state.userOrder = state.userOrder.filter(item => item.id !== action.payload.id);
      }
    },
    updateUserOrderQuantity: (state, action) => {
      const item = state.userOrder.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  }
})

export default userSlice.reducer;
export const { selectTable, addToUserOrder, removeFromUserOrder, updateUserOrderQuantity } = userSlice.actions;