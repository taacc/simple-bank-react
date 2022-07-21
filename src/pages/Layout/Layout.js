import React from "react";
import { ButtomNavigation } from "./ButtomNavigation";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { MainContent } from "./MainContent";
import { TransferPage } from "./TransferPage/TransferPage";
import { useTransferTradePage } from "../../hooks/useTransferTradePage";
export function Layout () {
    const [modalOpen, setItemModalOpen] = useTransferTradePage();
    return (
        <Container maxWidth="sm" sx={{padding: 0}}>
            <Box sx={{height: '100vh',display: 'flex', flexDirection: 'column'}}>
                <MainContent />
                <ButtomNavigation setItemModalOpen={setItemModalOpen} />
            </Box>
            <TransferPage open={modalOpen} handleClose={() => setItemModalOpen(false)}/>
      </Container>
    )
}