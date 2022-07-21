import React from "react";
import { HeaderNavigation } from "../../components/HeaderNavigation";
import { Container, IconButton, Box, Typography, SvgIcon} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CellItem } from "../../components/CellItem";
import { CellGroup } from "../../components/CellGroup";
import { ReactComponent as AvatarIcon } from '../../icon/avatar.svg';
import { ReactComponent as ShieldIcon } from '../../icon/shield.svg';
import { ReactComponent as FileIcon } from '../../icon/file.svg';
import { ReactComponent as TransferIcon } from '../../icon/transfer.svg';
import { ReactComponent as LadderIcon } from '../../icon/ladder.svg';
import { ReactComponent as BankCardIcon } from '../../icon/bankCard.svg';

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
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <Typography variant="h7" color="initial" sx={{
                    fontWeight: 'bold',
                    mb: '8px'
                }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="initial" sx={{
                    color: '#868686',
                    maxWidth: '270px',
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
            icon: <SvgIcon viewBox="0 0 1024 1024" component={TransferIcon} sx={{
                fontSize: '32px',
                mr: '20px'
            }}/>,
            link: true
        },
        {
            title: '卡片和账户设置',
            subtitle: 'ATM取款密码、休眠账户、荟存/荟花账户管理',
            icon: <SvgIcon viewBox="0 0 1024 1024" component={BankCardIcon} sx={{
                fontSize: '32px',
                mr: '20px'
            }}/>,
            link: true
        },
        {
            title: '投资理财',
            subtitle: '投资理财风险评估、投资和保险风险评估、投资知识和经验',
            icon: <SvgIcon viewBox="0 0 1024 1024" component={LadderIcon} sx={{
                fontSize: '32px',
                mr: '20px'
            }}/>,
            link: true
        },
        {
            title: '电子对账单',
            subtitle: '查看您的电子对账单',
            icon: <SvgIcon viewBox="0 0 1024 1024" component={FileIcon} sx={{
                fontSize: '32px',
                mr: '20px'
            }}/>,
            link: true
        },
    ]
    return <>
    
        <HeaderNavigation title="个人信息和账户设置"/>
        <Container maxWidth="xs" sx={{
            background: '#E3E7EB',
            height: '100vh',
            overflowX: 'hidden',
            overflowY: 'auto'
        }}>
            <Typography variant="h5" color="initial" sx={{
                textAlign: 'center',
                m: '16px 0 34px',
                fontSize: '26px'
            }}>
                顾 元凯
            </Typography>

            <Box sx={{
                mb: '30px'
            }}>
                <Typography component="div" variant="caption" color="initial" sx={{
                    color: 'gray',
                    mb: '10px'
                }}>
                    个人信息
                </Typography>
                <CellItem sx={{
                    background: 'white',
                    borderRadius: '8px',
                    boxShadow: 'rgb(0 0 0 / 5%) 0px 2px 2px 0px'
                }}>
                    <ProfileSettingCell {...{
                        title: '修改个人信息',
                        subtitle: '修改地址、邮箱或电话号码',
                        icon: <SvgIcon viewBox="0 0 1024 1024" component={AvatarIcon} sx={{
                            fontSize: '32px',
                            mr: '20px'
                        }}/>,
                        link: true
                    }}/>
                </CellItem>
            </Box>
            <Box sx={{
                mb: '30px'
            }}>
                <Typography component="div" variant="caption" color="initial" sx={{
                    color: 'gray',
                    mb: '10px'
                }}>
                    APP设置
                </Typography>
                <CellItem sx={{
                    background: 'white',
                    borderRadius: '8px',
                    boxShadow: 'rgb(0 0 0 / 5%) 0px 2px 2px 0px'
                }}>
                    <ProfileSettingCell {...{
                        title: '安全和APP设置',
                        subtitle: '设置生物识别信息xxxxxxxx',
                        icon: <SvgIcon viewBox="0 0 1024 1024" component={ShieldIcon} sx={{
                            fontSize: '32px',
                            mr: '20px'
                        }}/>,
                        link: true
                    }}/>
                </CellItem>
            </Box>
            <Box sx={{
                mb: '10px'
            }}>
                <Typography component="div" variant="caption" color="initial" sx={{
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