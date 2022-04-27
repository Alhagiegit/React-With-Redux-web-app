import { Button, Container, debounce, FormControl, FormHelperText, Input, InputLabel, Paper } from "@material-ui/core";
import React, { ChangeEventHandler, FC, useMemo, useState } from "react";
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../pages/user/store/user.action";
import "./login.css"


const Signin: FC=()=>{
    const defaultUser={isLogged: false, name:'', surname:'', username:''};
    const [user, setUser]=useState({...defaultUser})
    const dispatch = useDispatch()
    
    const changeHandler:ChangeEventHandler<HTMLInputElement> = ({target:{name, value}}) => {
        setUser({...user, [name]:value});
        console.log(user)
    };


    const debouncedChangeHandler = useMemo(()=>debounce(changeHandler, 200), [user]);
    return(

        <Container   maxWidth="md">
            <Paper className="signin-container" elevation={10}>
                        <div  className="formItem">
                            <FormControl  required={true} >
                                <InputLabel htmlFor="my-input">Name</InputLabel>
                                <Input onChange={debouncedChangeHandler}  type="name" name="name"  id="name" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">We'll never share your name.</FormHelperText>
                            </FormControl>
                        </div>
                        <div  className="formItem">
                            <FormControl  required={true} >
                                <InputLabel htmlFor="my-input">Surname</InputLabel>
                                    <Input onChange={debouncedChangeHandler}  type="surname" name="surname" id="surname" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">We'll never share your surname.</FormHelperText>
                            </FormControl>
                        </div>
                        <div  className="formItem">
                            <FormControl  required={true} >
                                <InputLabel htmlFor="my-input">Username</InputLabel>
                                    <Input onChange={debouncedChangeHandler} type="username" name="username"  id="username" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">We'll never share your Uaername.</FormHelperText>
                            </FormControl>
                        </div>
                        <Stack >
                            <Button onClick={()=> dispatch(login(user))} style={{marginTop:20,textAlign:"center"}} variant="contained">Sign in</Button>
                        </Stack>
            </Paper>
        </Container>
    )
}
export default Signin;