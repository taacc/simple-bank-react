import React from "react";
import { ButtomNavigation } from "./ButtomNavigation";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { MainContent } from "./MainContent";
export function Layout () {
    return (
        <Container maxWidth="sm" sx={{padding: 0}}>
            <Box sx={{height: '100vh',display: 'flex', flexDirection: 'column'}}>
                <MainContent />
                <ButtomNavigation />
            </Box>
      </Container>
    )
}