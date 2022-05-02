import React from "react";

import { Box } from '@mui/material'
import { Outlet } from "react-router-dom";
import { isLoggedIntoReddit } from "../Network/APICaller.js"

import LoginCard from "./User/LoginCard";

export default function App(){
    let boxSx = { display: 'flex', height: '100vh' }
    
    let isAuthedAlready = localStorage.getItem( "isAuthed" )
    if ( isAuthedAlready === null || !isAuthedAlready ) {
        console.log( "We are not authed yet.")
        return (
            <Box sx={boxSx}>
                <LoginCard />
            </Box>
        )
    }
    else {
        console.log( "We are now authed!" )
        return (
            <Box sx={boxSx}>
                <Outlet />
            </Box>
        )
    }
}
