import React from "react";
import Box from '@mui/material/Box';
import { Outlet } from "react-router-dom";

export function MainContent() {
    return (
        <Box sx={{flex: 1, background: '#E3E7EB', overflow: 'auto', position: 'relative'}}>
            <Outlet />
        </Box>
    )
}