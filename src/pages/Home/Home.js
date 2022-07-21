import React from "react";
import { Playground } from "../../components/Playground";
import { CellGroup } from "../../components/CellGroup";
import {Box, IconButton, ButtonBase} from '@mui/material';
import Typography from '@mui/material/Typography'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Ad = () => {
    return <Box
        sx={{
            background: 'white',
            p: '12px 16px',
            m: '200px 16px 16px',
            borderRadius: '10px',
            display: 'flex'
        }}
    >
        <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" width='100px'/>
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
const HomePageCell = ({
    account,
    accountType,
    balance,
    bankCardNum,
    hibernateCardList = [],
    link
}) => {
    return (
        <Box>
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
                    width: '100%'
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
            hibernateCardList: [
                {
                    bankCardNum: '******12312312'
                }
            ],
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
            <CellGroup configuration={definedCellConfig}>
                <HomePageCell />
            </CellGroup>
            <Ad />
        </>
    )
}