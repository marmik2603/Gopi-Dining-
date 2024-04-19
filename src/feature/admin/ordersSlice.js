import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getFunction } from "../../firebase";

const initialState = {
  loading: false,
  orders: null,
  error: null
}

export const getOrders = createAsyncThunk(
  'menu/getMenu',
  async () => {
    const resp = await getFunction('/admin/orders')
    return resp;
  }
)

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      })
  }
})

export default ordersSlice.reducer;