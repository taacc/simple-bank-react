import React from "react";
import {Box, Typography} from '@mui/material';
import adbg from '../../assets/ad.jpg';
export function Ad () {
    return <Box
            sx={{
                background: 'white',
                p: '12px 16px',
                m: '0 16px 16px',
                borderRadius: '10px',
                display: 'flex',
                boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 2px 0px;'
            }}
        >
            <img src={adbg} alt="d" width='100px'/>
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