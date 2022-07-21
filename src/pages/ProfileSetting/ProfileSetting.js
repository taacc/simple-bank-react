import React from "react";
import { HeaderNavigation } from "../../components/HeaderNavigation";
import { Container, IconButton, Box, Typography} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { CellItem } from "../../components/CellItem";
import { CellGroup } from "../../components/CellGroup";
import { fontSize } from "@mui/system";

const ProfileSettingCell = ({
    title,
    subtitle,
    icon,
    link
}) => {
    return (
        <Box key={subtitle} sx={{
            display: 'flex'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                {icon}
            </Box>
            <Box sx={{
                flex: '1',
                position: 'relative'
            }}>
                <Typography variant="h6" color="initial" sx={{
                    fontWeight: 'bold'
                }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="initial" sx={{
                    color: '#868686',
                    maxWidth: '200px',
                    fontSize: '12px'
                }}>
                    {subtitle}
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
export function ProfileSetting () {
    const cellGroupsConfig = [
        {
            title: '管理收账/收款账户',
            subtitle: '约定转账、手机号码支付、一寄绑卡',
            icon: <ReceiptLongIcon sx={{
                fontSize: '50px',
                mr: '10px'
            }}/>,
            link: true
        },
        {
            title: '卡片和账户设置',
            subtitle: 'ATM取款密码、休眠账户、荟存/荟花账户管理',
            icon: <ReceiptLongIcon sx={{
                fontSize: '50px',
                mr: '10px'
            }}/>,
            link: true
        },
        {
            title: '投资理财',
            subtitle: '投资理财风险评估、投资和保险风险评估、投资知识和经验',
            icon: <ReceiptLongIcon sx={{
                fontSize: '50px',
                mr: '10px'
            }}/>,
            link: true
        },
        {
            title: '电子对账单',
            subtitle: '查看您的电子对账单',
            icon: <ReceiptLongIcon sx={{
                fontSize: '50px',
                mr: '10px'
            }}/>,
            link: true
        },
    ]
    return <>
        <Container maxWidth="xs" sx={{
            background: 'rgb(240,244,247)',
            height: '100vh',
            overflowX: 'hidden',
            overflowY: 'auto'
        }}>
            <HeaderNavigation title="个人信息和账户设置"/>
            <Typography variant="h4" color="initial" sx={{
                textAlign: 'center',
                m: '16px 0'
            }}>
                顾 元凯
            </Typography>

            <Box sx={{
                mb: '10px'
            }}>
                <Typography component="div" variant="caption" color="initial" sx={{
                    fontWeight: 'bold',
                    color: 'gray',
                    mb: '10px'
                }}>
                    个人信息
                </Typography>
                <CellItem sx={{
                    background: 'white',
                    borderRadius: '10px'
                }}>
                    <ProfileSettingCell {...{
                        title: '修改个人信息',
                        subtitle: '修改地址、邮箱或电话号码',
                        icon: <ReceiptLongIcon sx={{
                            fontSize: '50px',
                            mr: '10px'
                        }}/>,
                        link: true
                    }}/>
                </CellItem>
            </Box>
            <Box sx={{
                mb: '10px'
            }}>
                <Typography component="div" variant="caption" color="initial" sx={{
                    fontWeight: 'bold',
                    color: 'gray',
                    mb: '10px'
                }}>
                    APP设置
                </Typography>
                <CellItem sx={{
                    background: 'white',
                    borderRadius: '10px'
                }}>
                    <ProfileSettingCell {...{
                        title: '安全和APP设置',
                        subtitle: '设置生物识别信息xxxxxxxx',
                        icon: <ReceiptLongIcon sx={{
                            fontSize: '50px',
                            mr: '10px'
                        }}/>,
                        link: true
                    }}/>
                </CellItem>
            </Box>
            <Box sx={{
                mb: '10px'
            }}>
                <Typography component="div" variant="caption" color="initial" sx={{
                    fontWeight: 'bold',
                    color: 'gray',
                    mb: '10px'
                }}>
                    金融设置
                </Typography>
                <CellGroup configuration={cellGroupsConfig}>
                    <ProfileSettingCell />
                </CellGroup>
            </Box>
        </Container>
    </>
}