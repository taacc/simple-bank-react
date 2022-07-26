import React from "react";
import { Typography, Box, IconButton } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom";

export function HeaderNavigation({title}) {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    }
    return <>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            p: '5px 0 5px 8px',
            position: 'relative',
            background: '#F0F4F7'
        }}>
            <IconButton onClick={back}>
                <ArrowBackIosNewIcon sx={{
                    fontSize: '20px'
                }}/>
            </IconButton>
            <Typography variant="h7" color="initial"
                sx={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
            >
                {title && title}
            </Typography>
        </Box>
    </>
}