import React from "react";
import { Box, Chip, Typography } from '@mui/material'
const BankCard = ({cardNum}) => {
    return <Box sx={{
        display: 'inline-block',
        position: 'relative',
        background: 'linear-gradient(138deg, rgba(21,55,101,1) 0%, rgba(15,39,77,1) 100%);',
        height: '130px',
        width: '310px',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
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
               {cardNum}
            </Typography>
        </Box>
    </ Box>
}
export function MyBankCard() {
    return (
    <Box sx={{
        overflowX: 'Scroll',
        whiteSpace: 'nowrap',
        mt: '10px',
        pl: '16px',
    }}>
        <BankCard cardNum="•••• 7641"/>
        <BankCard cardNum="•••• 0323"/>
        <BankCard cardNum="•••• 0330"/>
    </Box>
    )
}