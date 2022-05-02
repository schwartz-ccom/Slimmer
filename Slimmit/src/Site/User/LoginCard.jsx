import { Button, Divider, Paper, Stack, Typography } from "@mui/material";
import React from "react";

import { performRedditInitalAuth } from "../../Network/APICaller";

export default function LoginCard() {

    let paperSx = { width: '400px', height: 'fit-content', p: 2 }
    let stackSx = { width: '100%'}

    let performLogin = () => {
        performRedditInitalAuth().then( result => {
            window.location = result
        })
    }

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={stackSx}>
            <Paper sx={paperSx}>
                <Stack spacing={2}>
                    <Typography variant="h3" textAlign="center">Login</Typography>
                    <Divider />
                    <Typography>This app needs you to allow it to access your reddit profile</Typography>
                    <Typography>Press the button below to be redirected to reddit.com to do so</Typography>
                    <Button variant="contained" onClick={performLogin}>OAuth2.0 with Reddit</Button>
                </Stack>
            </Paper>
        </Stack>
    )
}