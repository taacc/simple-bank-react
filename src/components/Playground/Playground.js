import React from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as UserSettingIcon } from '../../icon/userSettingsLine.svg';
import { ReactComponent as ExitIcon } from '../../icon/exit.svg';
import SvgIcon from '@mui/material/SvgIcon';
import { useNavigate } from "react-router-dom";

export function Playground() {
    const navigate = useNavigate();
    const gotoProfilePage = () => {
        navigate('/profileSetting');
    }
    return (
        <Box sx={{
            p: '0 16px', 
            background: 'linear-gradient(138deg, rgba(21,55,101,1) 0%, rgba(15,39,77,1) 100%);',
            height: '100px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '4px #B59658 solid'
        }}>
            <Box sx={{display: 'flex',alignItems: 'center', fontSize: '16px'}}>
                <SvgIcon onClick={gotoProfilePage} viewBox="0 0 1024 1024" component={UserSettingIcon} sx={{
                    color: 'white',
                    fontSize: '40px'
                }}/>
                <Box component="span" sx={{pl: '10px'}}>顾 元凯</Box>
            </Box>
            <IconButton>
                <SvgIcon viewBox="0 0 1024 1024" component={ExitIcon} sx={{
                    color: 'white',
                    fontSize: '30px'
                }}/>
            </IconButton>
        </Box>
    )
}