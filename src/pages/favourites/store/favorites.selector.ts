import React from "react";
import { rootState } from "../../../store";

export const selectFavorite=(state:rootState)=>state.favorites
export const selectFavoriteColor=(state:rootState)=>state.favoriteColor
