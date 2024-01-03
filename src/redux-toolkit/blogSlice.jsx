import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    userSignOut: (state) => {
      state.userInfo = null;
    },
  },
});

export const { setUserInfo, userSignOut } = blogSlice.actions;
export default blogSlice.reducer;
