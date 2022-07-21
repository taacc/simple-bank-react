import React from "react";
import { Typography, Box, IconButton } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export function HeaderNavigation({title}) {
    return <>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            p: '5px 0',
            position: 'relative'
        }}>
            <IconButton>
                <ArrowBackIosNewIcon sx={{
                    fontSize: '20px'
                }}/>
            </IconButton>
            <Typography variant="h6" color="initial"
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