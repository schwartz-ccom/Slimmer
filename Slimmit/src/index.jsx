import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createRoot } from "react-dom/client";

import App from "./Site/App";
import NoRoute from "./Site/Navigation/NoRoute";
import Home from "./Site/Pages/Home";

let slimmitTheme = createTheme({
    palette: {
        background: {
            default: "#f3eaef"
        },
        primary: {
            main: '#3f374d'
        },
        secondary: {
            main: '#694841'
        }
    }
})

let root = createRoot( document.getElementById( "root" ) )
root.render(
    <ThemeProvider theme={slimmitTheme}>
        <CssBaseline>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} >
                        <Route index element={ <Home /> } />
                        <Route path="home" element={ <Home /> } />
                    </Route>
                    <Route path="*" element={<NoRoute /> } />
                </Routes>
            </BrowserRouter>
        </CssBaseline>
    </ThemeProvider>
)