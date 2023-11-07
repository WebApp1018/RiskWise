import { createSlice } from "@reduxjs/toolkit";
import isEmpty from "../utils/is-empty";
import setAuthToken from "../utils/setAuthToken";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.isAuthenticated = !isEmpty(action.payload);
      state.user = { ...action.payload };
    },
    registerUser: (state, action) => {
      state.user = { ...action.payload };
    },
    logoutUser: (state, action) => {
      // Remove token from localStorage
      localStorage.removeItem("jwtToken");
      // Remove auth header for future request
      setAuthToken(false);
      // Set current user to {} which will set isAuthenticated to false
      state.isAuthenticated = false;
      state.user = {};
    },
  },
});

export const { setCurrentUser, registerUser, logoutUser } = authSlice.actions;
export const getAuth = (state) => state.auth;

export default authSlice.reducer;
