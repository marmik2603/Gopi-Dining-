import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getFunction } from "../../firebase";

const initialState = {
  loading: false,
  menu: null,
  error: null
}

export const getMenu = createAsyncThunk(
  'menu/getMenu',
  async () => {
    const resp = await getFunction('/menu')
    return resp;
  }
)

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMenu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.menu = action.payload;
      })
      .addCase(getMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      })
  }
})

export default menuSlice.reducer;