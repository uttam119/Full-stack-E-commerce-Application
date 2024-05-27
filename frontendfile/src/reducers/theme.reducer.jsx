import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: JSON.parse(localStorage.getItem("dark")) || false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
      localStorage.setItem("dark", state.isDarkTheme);
    },
    setInitialTheme: (state) => {
      const themeData = localStorage.getItem("dark") === "true";
      state.isDarkTheme = themeData;
    },
  },
});

export const { toggleTheme, setInitialTheme } = themeSlice.actions;

export default themeSlice.reducer;
