import React from "react";
import { Box, Typography } from '@mui/material';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
const QuickFunctionItem = ({
    functionName,
    icon,
    onClick
}) => {
    return <Box sx={{
        display: 'inline-block',
        width: '120px',
        mr: '20px'
    }}
    onClick={onClick}
    >
        <Box sx={{
            height: '70px',
            background: 'rgb(16,47,91)',
            borderRadius: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
        }}>
            {icon}
        </Box>
        <Typography variant="caption" color="#333" component='div' sx={{
            textAlign: 'center',
            mt: '10px'
        }}>
                {functionName}
        </Typography>
    </ Box>
}
export function QuickActionList({
        setItemModalOpen
    }) {
    return (
    <Box sx={{
        overflowX: 'Scroll',
        whiteSpace: 'nowrap'
    }}>
        <QuickFunctionItem functionName="转账" icon={<AdUnitsIcon />} onClick={() => setItemModalOpen(true)}/>
        <QuickFunctionItem functionName="一键绑卡" icon={<AdUnitsIcon />}/>
        <QuickFunctionItem functionName="大额存单" icon={<AdUnitsIcon />}/>
        <QuickFunctionItem functionName="转账" icon={<AdUnitsIcon />}/>
    </Box>
    )
}