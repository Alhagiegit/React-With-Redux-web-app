import React from "react";
import {combineReducers, configureStore } from '@reduxjs/toolkit'
import { favoriteColorReducer, favoriteReducer } from "./pages/favourites/store/favorites.reducers";
import { type } from "os";
import { userReducer } from "./pages/user/store/user.reducer";


export const rootReducer = combineReducers({
  favorites:favoriteReducer,
  user:userReducer,
  favoriteColor:favoriteColorReducer

})


export const store = configureStore({
  reducer:rootReducer
})

export type rootState = ReturnType<typeof rootReducer>

