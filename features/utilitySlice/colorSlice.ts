import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface colorState {
  value: string;
}

const initialState: colorState = {
  value: "#e3f6f5",
};

const colorSlice = createSlice({
  name: "colorChanger",
  initialState,
  reducers: {
    setColor(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;
