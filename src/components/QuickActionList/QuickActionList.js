import React from "react";
import { Box, Typography, SvgIcon } from '@mui/material';
import {ReactComponent as TransferQuickIcon} from '../../icon/transferQuickIcon.svg';
import {ReactComponent as BindCardIcon} from '../../icon/bindCard.svg';
import {ReactComponent as TdIcon} from '../../icon/td.svg';
const QuickFunctionItem = ({
    functionName,
    icon,
    onClick
}) => {
    return <Box sx={{
        display: 'inline-block',
        width: '110px',
        mr: '20px',
    }}
    onClick={onClick}
    >
        <Box sx={{
            height: '60px',
            background: 'linear-gradient(138deg, rgba(21,55,101,1) 0%, rgba(15,39,77,1) 100%);',
            borderRadius: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
        }}>
            {icon}
        </Box>
        <Typography variant="caption" color="#333" component='div' sx={{
            textAlign: 'center',
            mt: '10px',
            fontWeight: 'bold'
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
        whiteSpace: 'nowrap',
        pl: '16px'
    }}>
        <QuickFunctionItem functionName="转账" icon={<SvgIcon viewBox="0 0 1024 1024" component={TransferQuickIcon} sx={{
                    color: 'white',
                    fontSize: '30px'
                }}/>} onClick={() => setItemModalOpen(true)}/>
        <QuickFunctionItem functionName="一键绑卡" icon={<SvgIcon viewBox="0 0 1024 1024" component={BindCardIcon} sx={{
                    color: 'white',
                    fontSize: '30px'
                }}/>}/>
        <QuickFunctionItem functionName="大额存单" icon={<SvgIcon viewBox="0 0 1024 1024" component={TdIcon} sx={{
                    color: 'white',
                    fontSize: '30px'
                }}/>}/>
    </Box>
    )
}