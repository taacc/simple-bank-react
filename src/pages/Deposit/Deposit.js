import React from "react";
import { HeaderNavigation } from "../../components/HeaderNavigation";
import { Container, IconButton, Box, Typography, Paper, InputBase} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SearchIcon from '@mui/icons-material/Search';
import { CellGroup } from "../../components/CellGroup";
import { MyBankCard } from "../../components/MyBankCard";

const DepositCell = ({
    date,
    comment,
    balance,
    link
}) => {
    return (
        <Box key={date}>
            <Box sx={{
                position: 'relative'
            }}>
                <Typography variant="caption" color="initial">
                    {date}
                </Typography>
                <Typography variant="h6" color="initial" sx={{
                    fontWeight: 'bold',
                    color: 'green'
                }}>
                    {balance}
                </Typography>
                <Typography variant="body2" color="initial">
                    {comment}
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
        </Box>
    )
}
export function Deposit () {
    const definedCellConfig = [
        {
            date: '2022/06/20',
            comment: '已得利息',
            balance: 'CNY 52.96',
            link: true
        },
        {
            date: '2022/05/19',
            comment: '超级网银xxxxxx',
            balance: 'CNY 52.96',
            link: true
        },
        {
            date: '2022/08/20',
            comment: '已得利息',
            balance: 'CNY 52.96',
            link: true
        },
        {
            date: '2022/07/20',
            comment: '超级网银xxxxxx',
            balance: 'CNY 2323',
            link: true
        },
        {
            render: () => {
                return <Box
                sx={{
                    background: 'white',
                    display: 'flex',
                    alignItem: 'center',
                    position: 'relative'
                }}
            >
                <ReceiptLongIcon sx={{
                    fontSize: '50px'
                }}/>
                <Typography variant="h7" color="initial" sx={{ml: '10px', m:'auto 10px auto'}}>
                    查看所有交易
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
                        <KeyboardArrowRightIcon sx={{
                            fontSize: '20px'
                        }}/>
                </IconButton>
            </Box>
            }
        }
        
    ]
    return <>
        <Container maxWidth="xs" sx={{
            background: 'rgb(240,244,247)',
            height: '100vh',
            overflowX: 'hidden',
            overflowY: 'auto'
        }}>
            <HeaderNavigation title="存款"/>
            <MyBankCard />
            <Box>
                <Typography variant="caption" color="initial" sx={{
                    fontWeight: 'bold',
                    color: 'gray'
                }}>
                    最近交易
                </Typography>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', borderRadius: '30px', m:'10px 0', boxShadow: 'none' }}
                >
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="搜索"
                        inputProps={{ 'aria-label': '搜索' }}
                    />
                </Paper>
                <CellGroup configuration={definedCellConfig} sx={{
                        mt: '6px'
                    }}>
                        <DepositCell />
                </CellGroup>
            </Box>
        </Container>
    </>
}