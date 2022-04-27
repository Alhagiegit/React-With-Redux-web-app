import { createReducer } from "@reduxjs/toolkit";
import React from "react";
import { Character } from "../../../Models";
import {add, clear, color, remove } from "./favorites.actions";


export const favoriteReducer=createReducer([] as Character[], builder=>{
    builder
    .addCase(remove,(state, action)=>state.filter((character)=>character.id !== action.payload))
    .addCase(clear,()=>[] as Character[])
    .addCase(add, (state, action)=>state.map(({id})=>id).includes(action.payload.id) ? state :  [...state, action.payload])
})

export const favoriteColorReducer=createReducer('white', builder=>{
    builder
    .addCase(color, (state, action)=>state=action.payload);
})