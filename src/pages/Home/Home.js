import React from "react";
import { Playground } from "../../components/Playground";
import { CellGroup } from "../../components/CellGroup";
import {Box, IconButton, ButtonBase} from '@mui/material';
import Typography from '@mui/material/Typography'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import { Ad } from "../../components/Ad";
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
                <Typography variant="caption" color="initial">
                    {account}
                    {
                        accountType ? <Box sx={{
                            display: 'inline-block',
                            background: 'rgb(235,238,253)',
                            borderRadius: '5px',
                            color: 'rgb(65,67,145)',
                            p: '2px 4px',
                            transform: 'scale(0.7) translateY(-4px)',
                            fontWeight: 'bold'
                        }}>{accountType}</Box> : 
                        <Box component='span'>
                            {bankCardNum}
                        </Box>
                    }
                </Typography>
                <Typography variant="h6" color="initial" sx={{
                    fontWeight: 'bold'
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
                    border: '2px rgb(55,75,96) solid',
                    mt: '5px',
                    p: '10px 5px',
                    borderRadius: '10px',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    color: 'rgb(55,75,96)',
                    position: 'relative',
                    width: '100%',
                    justifyContent: 'left'
                }}
                >
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
    const definedCellConfig = [
        {
            account: '存款',
            accountType: '休眠账户',
            balance: '52.96'
        },
        {
            account: '借记卡账户',
            balance: 'CNY 52.96',
            bankCardNum: '******12312312',
            onClick: () => navigate('/deposit'),
            link: true
        },
        {
            account: '现汇活期存款',
            balance: 'USD 0.00',
            bankCardNum: '******12312312',
            hibernateCardList: [
                {
                    bankCardNum: '******12312312'
                }
            ],
            link: true
        },
        {
            account: '现汇活期存款',
            balance: 'EUR 0.00',
            bankCardNum: '******0323',
            hibernateCardList: [
                {
                    bankCardNum: '******0323'
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
        </>
    )
}