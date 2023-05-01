import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
// create a store
const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
// export store
export default store;
