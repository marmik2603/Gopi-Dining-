import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getDatabase, onValue, ref } from "firebase/database";

const initialState = {
  loading: false,
  tables: null,
  error: null
}

export const subscribeToTables = createAsyncThunk(
  'tables/subscribeToTables',
  async (_, { dispatch }) => {
    const db = getDatabase();
    const tablesRef = ref(db, '/api/tables');
    onValue(tablesRef, (snapshot) => {
      const tables = snapshot.val();
      dispatch(setTables(tables));
    });
  }
)

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setTables: (state, action) => {
      state.tables = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(subscribeToTables.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(subscribeToTables.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(subscribeToTables.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
})

export default tableSlice.reducer;
export const { setTables } = tableSlice.actions;