import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginState {
  value: boolean;
}

const initialState: loginState = {
  value: false,
};

const loginSlice = createSlice({
  name: "loginSeter",
  initialState,
  reducers: {
    setLogin(state, action: PayloadAction<boolean>) {
      state.value = action.payload;
    },
  },
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
