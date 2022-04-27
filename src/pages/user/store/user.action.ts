import { createAction } from "@reduxjs/toolkit";
import { UserInfo } from "../../../Models";



export const login= createAction<UserInfo>("user/login");
export const logout= createAction<UserInfo>("user/logout");