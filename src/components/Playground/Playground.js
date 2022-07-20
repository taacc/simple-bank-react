import React from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export function Playground() {
    return (
        <Box sx={{
            p: '0 16px', 
            backgroundColor: 'rgb(17, 50, 95)',
            height: '90px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '5px rgb(180, 151, 93) solid'
        }}>
            <Box sx={{display: 'flex',alignItems: 'center'}}>
                <Avatar>H</Avatar>
                <Box component="span" sx={{pl: '10px'}}>顾元凯</Box>
            </Box>
            <IconButton>
                <ExitToAppIcon sx={{
                    color: 'white',
                    fontSize: '30px'
                }}/>
            </IconButton>
        </Box>
    )
}