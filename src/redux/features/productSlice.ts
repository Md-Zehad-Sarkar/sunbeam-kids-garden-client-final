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
      state.products.push(action.payload);
    },
  },
});

export const { addProductToCart } = productSlice.actions;

export default productSlice.reducer;
