import React, { useState, useEffect } from "react";
import { Playground } from "../../components/Playground";
import { CellGroup } from "../../components/CellGroup";
import {Box, IconButton, ButtonBase, SvgIcon, Slide, Typography, Snackbar, Alert} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import { Ad } from "../../components/Ad";
import { ReactComponent as BankCard } from '../../icon/bankCard.svg';

const TransitionUp = (props) => {
    return <Slide {...props} direction="up" />;
  }

const HomePageCell = ({
    account,
    accountType,
    balance,
    bankCardNum,
    hibernateCardList = [],
    onClick,
    link
}) => {
    return (
        <Box key={bankCardNum} onClick={onClick}>
            <Box sx={{
                position: 'relative'
            }}>
                <Typography variant="caption" color="#7F7F7F" sx={{
                    fontSize: '14px',
                    fontWeight: 'bold'
                }}>
                    {account}
                    {
                        accountType ? <Box sx={{
                            display: 'inline-block',
                            background: '#EBEEFD',
                            borderRadius: '5px',
                            color: '#414391',
                            p: '2px 4px',
                            transform: 'scale(0.8) translateY(-3px)',
                            fontWeight: 'bold'
                        }}>{accountType}</Box> : 
                        <Box component='span' sx={{
                            ml: '3px',
                            fontWeight: 'bold'
                        }}>
                            {bankCardNum}
                        </Box>
                    }
                </Typography>
                <Typography variant="h6" color="initial" sx={{
                    fontWeight: 'bold',
                    lineHeight: '25px'
                }}>
                    {balance}
                </Typography>
                <IconButton sx={
                {
                    position: 'absolute',
                    right: '0',
                    top: '50%',
                    p: 0,
                    transform: 'translateY(-50%)'
                }
                 }>
                {
                    link ? 
                    <KeyboardArrowRightIcon sx={{
                        fontSize: '20px'
                    }}/> : null
                }

                </IconButton>
            </Box>
            {
                hibernateCardList && hibernateCardList.map((hibernateCard) => 
                <ButtonBase
                    component="div"
                    onMouseDown={(e) => e.stopPropagation () }
                    sx={{
                    border: '2px #3B5463 solid',
                    mt: '20px',
                    p: '10px 5px',
                    borderRadius: '10px',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    color: '#3B5463',
                    position: 'relative',
                    width: '100%',
                    justifyContent: 'left'
                }}
                >
                    <SvgIcon viewBox="0 0 1024 1024" component={BankCard} sx={{
                        color: '#3B5463',
                        fontSize: '23px',
                        mr: '4px'
                    }}/>
                    卡片待激活 {hibernateCard.bankCardNum}
                    <IconButton sx={
                    {
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        p: 0,
                        transform: 'translateY(-50%)'
                    }
                    }>
                    {
                        link ? 
                        <KeyboardArrowRightIcon sx={{
                            fontSize: '20px'
                        }}/> : null
                    }
                    </IconButton>
                </ButtonBase>)
            }
        </Box>
    )
}
export function Home () {
    const navigate = useNavigate();
    const [openSnackbar, setSnackbar] = useState(false);
    useEffect(() => {
        setSnackbar(true);
        setTimeout(() => {
            setSnackbar(false);
        }, 3000);
    }, [])
    const definedCellConfig = [
        {
            account: '存款',
            accountType: '休眠账户',
            balance: 'RMB 52.96'
        },
        {
            account: '借记卡账户',
            balance: 'CNY 52.96',
            bankCardNum: '●●●● 7641',
            onClick: () => navigate('/deposit'),
            link: true
        },
        {
            account: '现汇活期存款',
            balance: 'USD 0.00',
            bankCardNum: '●●●● 0323',
            hibernateCardList: [
                {
                    bankCardNum: '●●●● 0323'
                }
            ],
            link: true
        },
        {
            account: '现汇活期存款',
            balance: 'EUR 0.00',
            bankCardNum: '●●●● 0330',
            hibernateCardList: [
                {
                    bankCardNum: '●●●● 0330'
                }
            ],
            link: true
        },
    ]
    return (
        <>
            <Playground />
            <CellGroup configuration={definedCellConfig} sx={{
                m: '16px'
            }}>
                <HomePageCell />
            </CellGroup>
            <Ad />
            <Snackbar open={openSnackbar} TransitionComponent={TransitionUp} >
                <Alert severity="warning" sx={{ width: '100%' }}>风控账户设备绑定，请联系您的客户经理！</Alert>
            </Snackbar>
        </>
    )
}