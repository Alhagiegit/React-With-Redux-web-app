import { userInfo } from "os";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserInfo } from "../../Models";
import { logout } from "./store/user.action";
import { selectUser } from "./store/user.selector";



export const User: FC=()=>{
    const user=useSelector(selectUser);
    const dispatch=useDispatch()
    return(
        <>
        {
            user.isLogged ?
        <>
            <div style={{background: 'lightgray', padding:5}}>
                <h1>User Details</h1>
                <h3> is Logged: {user.isLogged ? 'True': 'False'}</h3>
                <h3>Name:  {user.name.toUpperCase()}</h3>
                <h3> Surname: { user.surname.toUpperCase()}</h3>
                <h3> Username: { user.username.toUpperCase()}</h3>
            </div>
            {/* <button onClick={()=>dispatch(logout)}>logout</button> */}
        </>
        :
        <h3 style={{textAlign:'center'}}> please login to see user details</h3>
        }
        </>
    )
}