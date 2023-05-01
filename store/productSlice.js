import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  allProducts: [],
  products: [],
  loading: false,
  error: null,
  product: {},
  search: "",
};

// create a product slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      console.log(action);
      state.categories = action.payload;
    },
    setAllProducts: (state, action) => {
      console.log(action);
      state.products = action.payload;
      state.allProducts = action.payload;
    },
    searchProducts: (state, action) => {
      console.log(action);
      state.search = action.payload;
      state.products = state.allProducts.filter((prod) =>
        prod.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setSingleProduct: (state, action) => {
      console.log(action);
      state.product = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
// export actions
export const {
  setCategories,
  setAllProducts,
  searchProducts,
  setSingleProduct,
  setLoading
} = productSlice.actions;
// export reducer
export default productSlice.reducer;
