import React from "react";
import {Box, Typography} from '@mui/material';

export function Ad () {
    return <Box
            sx={{
                background: 'white',
                p: '12px 16px',
                m: '200px 16px 16px',
                borderRadius: '10px',
                display: 'flex'
            }}
        >
            <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" alt="d" width='100px'/>
            <Box>
                <Typography variant="h7" color="initial" component="div" sx={{fontWeight: 'bold', ml: '10px'}}>
                    App新功能
                </Typography>
                <Typography variant="caption" color="initial" sx={{ml: '10px'}}>
                    不止新意，还有心意
                </Typography>
            </Box>
        </Box>
}