import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cartsProp {
  cart: {
    id: string;
    image: any;
    title: string;
    price: string;
    sellingPrice: number;
    quantity: number;
    ceilingPrice: number;
    totalItem: number;
    itemLeft: number;
    discount: number;
  }[];
}

type payloadtype = {
  id: string;
  image: any;
  title: string;
  price: string;
  sellingPrice: number;
  ceilingPrice: number;
  totalItem: number;
  itemLeft: number;
  discount: number;
};

type payloadtypeInput = {
  id: string;
  image: any;
  title: string;
  price: string;
  sellingPrice: number;
  quantity: number;
  ceilingPrice: number;
  totalItem: number;
  itemLeft: number;
  discount: number;
};

const initialState: cartsProp = {
  cart: [],
};

const CartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<payloadtype>) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item?.quantity != undefined) item.quantity++;
    },

    incrementQuantityWithInput: (
      state,
      action: PayloadAction<payloadtypeInput>
    ) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
    },

    decrementQuantityAndDelete: (state, action: PayloadAction<string>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item?.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      } else {
        if (item?.quantity != undefined) {
          item.quantity--;
        }
      }
    },

    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item?.quantity === 1) {
        item.quantity = 1;
      } else {
        if (item?.quantity !== undefined) {
          item.quantity--;
        }
      }
    },

    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const {
  addToCart,
  decrementQuantityAndDelete,
  incrementQuantity,
  decrementQuantity,
  incrementQuantityWithInput,
  removeItem,
} = CartsSlice.actions;
export default CartsSlice.reducer;
