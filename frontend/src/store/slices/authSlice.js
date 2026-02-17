import { createSlice } from "@reduxjs/toolkit";

let user;

const initialState = {
  isLoggedIn: async function checkAuth() {
    await axios.get("http://localhost:3000/api/auth/me", { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          user = res.data.user;
          return true;
        } else {
          return false;
        }
      })
      .catch(() => {
        return false;
      });
  },
  user: user || null,
};

