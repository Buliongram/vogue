import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("vogueWearsUser")) || null;
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      state = action.payload;
      localStorage.setItem("vogueWearsUser", JSON.stringify(state));
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
