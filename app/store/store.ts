import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../../features/cartSlice/cartSlice";
import bottomNavigation from "../../features/utilitySlice/bottomSlice";
import colorSlice from "../../features/utilitySlice/colorSlice";
import loginSlice from "../../features/utilitySlice/loginSlice";

const store = configureStore({
  reducer: {
    bottomNav: bottomNavigation,
    colorChaner: colorSlice,
    loginSeter: loginSlice,
    cartList: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
