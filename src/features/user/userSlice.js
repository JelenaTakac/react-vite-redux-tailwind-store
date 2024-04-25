import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  user: { username: "jelena" },
  theme: "dracula",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  // reducers
  reducers: {
    loginUser: (state, action) => {
      console.log("login");
    },
    logoutUser: (state) => {
      console.log("logout");
    },
    toggleTheme: (state) => {
      console.log("toggle theme");
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
