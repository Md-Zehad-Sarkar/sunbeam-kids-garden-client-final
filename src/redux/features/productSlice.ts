import { TProduct } from "@/types/products.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  products: TProduct[];
};

const initialState: TInitialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<TProduct>) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.products.findIndex(
        (product) => product.id === id
      );
      if (existingProduct >= 0) {
        state.products[existingProduct].quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: quantity || 1 });
      }
    },

    clearProductCart: (state, action: PayloadAction<TProduct>) => {
      state.products = [];
    },
  },
});

export const { addProductToCart, clearProductCart } = productSlice.actions;

export default productSlice.reducer;
