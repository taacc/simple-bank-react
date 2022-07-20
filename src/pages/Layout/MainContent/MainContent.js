import React from "react";
import Box from '@mui/material/Box';
import { Outlet } from "react-router-dom";

export function MainContent() {
    return (
        <Box sx={{flex: 1 }}>
            <Outlet />
        </Box>
    )
}