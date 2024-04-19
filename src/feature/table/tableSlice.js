import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getFunction } from "../../firebase"

const initialState = {
  loading: false,
  tables: null,
  error: null
}

export const getTable = createAsyncThunk(
  'tables/getTables',
  async () => {
    const resp = await getFunction('/tables')
    return resp;
  }
)

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTable.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTable.fulfilled, (state, action) => {
        state.loading = false;
        state.tables = action.payload;
      })
      .addCase(getTable.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
})

export default tableSlice.reducer;