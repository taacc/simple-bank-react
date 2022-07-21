import React from "react";
import { Box, Chip, Typography } from '@mui/material'
const BankCard = () => {
    return <Box sx={{
        display: 'inline-block',
        position: 'relative',
        background: 'rgb(16,47,91)',
        height: '200px',
        width: '350px',
        borderRadius: '10px',
        mr: '20px'
    }}>
        <Chip label="账户设置" sx={{
            background: 'white',
            color: 'rgb(16,47,91)',
            position: 'absolute',
            right: '10px',
            top: '10px'
        }}/>
        <Box sx={{
            color: 'white',
            position: 'absolute',
            left: '10px',
            bottom: '10px'
        }}>
            <Typography component='div' variant="caption" color="white">
                借记卡账户
            </Typography>
            <Typography variant="h7" color="white">
                ****7641
            </Typography>
        </Box>
    </ Box>
}
export function MyBankCard() {
    return (
    <Box sx={{
        overflowX: 'Scroll',
        whiteSpace: 'nowrap'
    }}>
        <BankCard />
        <BankCard />
        <BankCard />
    </Box>
    )
}