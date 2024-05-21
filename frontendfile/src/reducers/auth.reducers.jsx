import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authSvc from "../pages/common/auth/service/auth.service";
 export const loggedInUserSet=createAsyncThunk(
    "Auth/loggedInUserSet",
    async(data,thunkAPI)=>{
        try{
            let response = await authSvc.getLoggedInUser()
            return response;

        }catch(exception){
            throw exception
        }

    }
)
const AuthSlicer=createSlice({
    name:"Auth",
    initialState:{
   loggedInUser:null
    },
    reducers:{
       setLoggedInUser:(state,action)=>{
        state.loggedInUser=action.payload
       }

       
    },
    extraReducers:(builder)=>{
        builder.addCase(loggedInUserSet.fulfilled,(state,action)=>{
state.loggedInUser=action.payload.result
        })
        builder.addCase(loggedInUserSet.rejected,(state,action)=>{
            localStorage.clear()
            state.loggedInUser=null
        })
    }
})

export const  {setLoggedInUser}=AuthSlicer.actions;
export default AuthSlicer.reducer;