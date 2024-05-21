
import { configureStore } from "@reduxjs/toolkit"
import AuthReducers from "../reducers/auth.reducers"
const store = configureStore({
    reducer:{
        auth:AuthReducers
    }
})


export default store