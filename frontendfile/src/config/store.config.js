
// import { configureStore } from "@reduxjs/toolkit"
// import AuthReducers from "../reducers/auth.reducers"
// import ThemeReducers from "../reducers/themeSlice";
// const store = configureStore({
//     reducer:{
//         auth:AuthReducers ,
//         theme: ThemeReducers
// })


// export default store


import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../reducers/auth.reducers";
import ThemeReducer ,{setInitialTheme}from "../reducers/theme.reducer";

const rootReducer = {
  auth: AuthReducer,
  theme: ThemeReducer,
};

const store = configureStore({
  reducer: rootReducer,
});
store.dispatch(setInitialTheme());

export default store;