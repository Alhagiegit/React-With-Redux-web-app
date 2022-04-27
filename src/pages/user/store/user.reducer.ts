import { createReducer } from "@reduxjs/toolkit";
import { UserInfo } from "../../../Models";
import { login, logout } from "./user.action";


const  initialState={name:'', surname:'', username:'', isLogged:false}
export const userReducer = createReducer({} as UserInfo, builder=>{
    builder
    .addCase(login, (state, action)=>{
        if(action.payload.name && action.payload.surname && action.payload.username !== ''){
            state.isLogged=true;
            state.name= action.payload.name
            state.surname= action.payload.surname
            state.username= action.payload.username
            console.log(state.name)
        return  state
        }else{
            return state={} as UserInfo
        }
    })
    .addCase(logout, ()=>{
       return {} as UserInfo
    })
})