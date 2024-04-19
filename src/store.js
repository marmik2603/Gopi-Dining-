import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./feature/table/tableSlice";
import userReducer from "./feature/user/userSlice";
import menuReducer from "./feature/menu/menuSlice";
import ordersReducer from "./feature/admin/ordersSlice";

const store = configureStore({
  reducer: {
    table: tableReducer,
    user: userReducer,
    menu: menuReducer,
    orders: ordersReducer
  }
})

export default store;