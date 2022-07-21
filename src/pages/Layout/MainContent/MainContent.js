import React from "react";
import Box from '@mui/material/Box';
import { Outlet } from "react-router-dom";

export function MainContent() {
    return (
        <Box sx={{flex: 1, background: 'rgb(225,236,241)', overflow: 'auto'}}>
            <Outlet />
        </Box>
    )
}