import React from "react";
import { HeaderNavigation } from "../../components/HeaderNavigation";
import { Container, IconButton, Box, Typography, Paper, InputBase, SvgIcon} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import { CellGroup } from "../../components/CellGroup";
import { CellItem } from "../../components/CellItem";
import { MyBankCard } from "../../components/MyBankCard";
import { Ad } from "../../components/Ad"; 
import { QuickActionList } from "../../components/QuickActionList";
import { TransferPage } from "../Layout/TransferPage/TransferPage";
import { useTransferTradePage } from "../../hooks/useTransferTradePage";
import { ReactComponent as FileIcon } from '../../icon/file.svg';
import { ReactComponent as BookIcon } from '../../icon/book.svg';

const DepositCellWithCellIcon = ({
    title,
    date,
    link,
    icon,
    balance
}) => {
    return (
        <Box key={date} sx={{
            display: 'flex'
        }}>
            {icon && <Box sx={{
                display: 'flex',
                alignItems: 'center',
                width: '42px'
            }}>
                {icon}
            </Box>}
            <Box sx={{
                flex: '1',
                position: 'relative'
            }}>
                <Typography variant="body2" color="#9A9B9B">
                    {title}
                </Typography>
                {date && <Typography variant="h6" color="initial" sx={{
                    maxWidth: '280px',
                    fontWeight: 'bold',
                    lineHeight: '30px',
                    fontSize: '17px'
                }}>
                    {date}
                </Typography>}
                {balance && <Typography variant="h5" color="initial" sx={{
                    maxWidth: '280px',
                    fontWeight: 'bold',
                    lineHeight: '30px'
                }}>
                    {balance}
                </Typography>}
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

const DepositCell = ({
    date,
    comment,
    balance,
    link,
    ccyUnit
}) => {
    return (
        <Box key={date}>
            <Box sx={{
                position: 'relative'
            }}>
                <Typography variant="caption" color="initial" sx={{
                    fontWeight: 'bold',
                    color: '#9A9B9B'
                }}>
                    {date}
                </Typography>
                <Typography variant="h6" color="initial" sx={{
                    fontWeight: 'bold',
                    color: balance >= 0 || typeof balance === 'string' ? "green" : "#333",
                    lineHeight: '24px',
                    fontSize: '17px'
                }}>
                    {
                        balance >= 0 || typeof balance === 'string' ? 
                        `${ccyUnit} ${balance}` : 
                        `- ${ccyUnit} ${String(balance).substring(1)}.00`
                    }
                </Typography>
                <Typography variant="body2" color="initial" sx={{
                    width: '290px',
                    fontSize: '13px',
                    color: '#7F7F7F'
                }}>
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
    const [modalOpen, setItemModalOpen] = useTransferTradePage();
    const definedCellConfig = [
        {
            date: '2022/07/22',
            comment: '柜面汇入 本人',
            ccyUnit: 'CNY',
            balance: '67,995,578.84',
            link: true
        },
        {
            date: '2022/06/20',
            comment: '已得利息',
            ccyUnit: 'CNY',
            balance: 0.16,
            link: true
        },
        {
            date: '2022/05/19',
            comment: '超级网银汇出交易 本人 中国民生银行股份有限公司上海天钥支行 XXXXXXXXXXXXXXX7996',
            ccyUnit: 'CNY',
            balance: -400,
            link: true
        },
        {
            date: '2022/03/19',
            comment: '已得利息',
            ccyUnit: 'CNY',
            balance: 0.23,
            link: true
        },
        {
            date: '2021/12/20',
            comment: '已得利息',
            ccyUnit: 'CNY',
            balance: 0.48,
            link: true
        },
        {
            date: '2021/10/04',
            comment: '超级网银汇入交易 贾丽莎 中国建设银行股份有限公司 双流棠湖支行 跨行转出',
            ccyUnit: 'CNY',
            balance: '200.00',
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
                <SvgIcon viewBox="0 0 1024 1024" component={BookIcon} sx={{
                    fontSize: '32px',
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
            background: '#E3E7EB',
            height: '100vh',
            p: 0,
            overflowX: 'hidden',
            overflowY: 'auto'
        }}>
            <HeaderNavigation title="存款"/>
            <MyBankCard />
            <Box sx={{
                mt: '20px',
                mb: '30px',
                p: '0 16px'
            }}>
                <CellItem sx={{
                    background: 'white',
                    borderRadius: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 2px 0px;'
                }}>
                    <DepositCellWithCellIcon {...{
                        title: '当前可用余额',
                        balance: 'CNY 67995631.8',
                        link: true
                    }}/>
                </CellItem>
            </Box>
            <QuickActionList setItemModalOpen={setItemModalOpen} />
            <Box sx={{
                mt: '30px',
                mb: '10px',
                p: '0 16px'
            }}>
                <CellItem sx={{
                    background: 'white',
                    borderRadius: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 2px 0px;'
                }}>
                    <DepositCellWithCellIcon {...{
                        title: '电子对账单',
                        date: '2022/07/10',
                        icon: <SvgIcon viewBox="0 0 1024 1024" component={FileIcon} sx={{
                            fontSize: '32px',
                            mr: '20px'
                        }}/>,
                        link: true
                    }}/>
                </CellItem>
            </Box>
            <Box sx={{
                mt: '30px',
                p: '0 16px'
            }}>
                <Typography variant="caption" color="initial" sx={{
                    fontWeight: 'bold',
                    color: 'gray',
                }}>
                    最近交易
                </Typography>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', borderRadius: '30px', m:'10px 0',  boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 2px 0px;', height: '42px'}}
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
            <Box sx={{
                mt: '100px'
            }}>
                <Typography component="div" variant="caption" color="initial" sx={{
                    fontWeight: 'bold',
                    color: 'gray',
                    pl: '16px',
                    mb: '10px'
                }}>
                    更多福利
                </Typography>
                <Ad />
            </Box>
            <TransferPage open={modalOpen} handleClose={() => setItemModalOpen(false)}/>
        </Container>
    </>
}