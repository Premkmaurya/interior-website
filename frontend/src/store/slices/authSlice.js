import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  const res = await axios.get("http://localhost:3000/api/auth/me", {
    withCredentials: true,
  });
  return res.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false,
    loading: true,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.user = null;
        state.isLoggedIn = false;
        state.loading = false;
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
