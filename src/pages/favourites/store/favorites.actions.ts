import { createAction } from "@reduxjs/toolkit";
import React from "react";
import { Character } from "../../../Models";



export const remove = createAction<number>("favorites/remove");
export const clear = createAction("favorites/clear");
export const add = createAction<Character>("favorite/add");
export const color = createAction<string>("favorite/color");