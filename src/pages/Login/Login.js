import React, { forwardRef, useState } from "react";
import { Stack, Divider,Box, Dialog, Button, Slide, DialogTitle, TextField, InputAdornment, Typography} from '@mui/material';
import background from '../../assets/login_background.jpg';
import template from '../../assets/template.jpg';
import citipng from '../../assets/citi.png';
import { styled } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const InnerDialog = styled(Dialog)(
    `
        & .MuiDialog-container {
            position: relative
        }
        & .MuiPaper-root {
            position: absolute;
            width: 100%;
            margin: 0;
            bottom: 0;
            border-radius: 0;
        }
    `
)

const InnerInputAdornment = styled(InputAdornment)(
    `
        & .MuiTypography-root {
            color: #11629A
        }
    `
)
const InnerTextField = styled(TextField)(
    `
        & .MuiInputBase-colorPrimary {
            color: ''
        }
    `
)

const LoginDialog = ({
    open, onClose
}) => {
    const [state, setState] = useState({
        username: '',
        password: ''
    })
    const navigate = useNavigate();
    const login = () => {
        navigate('/home', { replace: true });
    }
    return <InnerDialog TransitionComponent={Transition} onClose={onClose} open={open}>
            <DialogTitle color="initial" sx={{
                fontSize: '14px',
                color: 'gray'
            }}>请输入用户名</DialogTitle>
            <Box component="form" autoComplete="off" sx={{
                mb: '10px'
            }}>
                <Stack direction="column" alignItems="center" spacing={2}>
                    <InnerTextField
                        id="outlined-password-input"
                        label="用户名"
                        required
                        type="text"
                        autoComplete="current-password"
                        sx={{
                            width: '90%'
                        }}
                        value={state.username}
                        onChange={(e) => setState({
                            ...state,
                            username: e.target.value
                        })}
                    />
                    <InnerTextField
                        id="outlined-password-input"
                        required
                        label="密码"
                        type="password"
                        autoComplete="current-password"
                        sx={{
                            width: '90%'
                        }}
                        value={state.password}
                        onChange={(e) => setState({
                            ...state,
                            password: e.target.value
                        })}
                        InputProps={{
                            endAdornment: <InnerInputAdornment position="end">忘记用户名或密码？</InnerInputAdornment>
                        }}
                    />
                    <Button disabled={!(state.password && state.username)} onClick={() => login()} variant="contained" sx={{
                            width: '90%',
                            height: '39px',
                            borderRadius: '40px',
                            mb: '10px',
                            background: '#11629A'
                    }}>登录</Button>
                </Stack>
            </Box>

    </InnerDialog>
}

export function Login () {
    const [loginDialogActive, setloginDialogActive] = useState(false);
    return <>
        <Box component="div" sx={{
                height: '400px',
                backgroundImage: `url(${background})`,
                backgroundSize: '150%',
                backgroundRepeat: 'no-repeat',
            }}>
            <Stack direction="column" alignItems="center" spacing={2}>
                <img style={{
                    marginTop: '50px'
                }} src={citipng} width='70' alt="11"/>
                <Typography variant="h7" color="#cecece" sx={{
                    marginTop: 0
                }}>早上好</Typography>
                <Button variant="outlined" sx={{
                    width: '90%',
                    height: '39px',
                    borderRadius: '40px',
                    background: 'white',
                    color: '#11629A'
                }}>激活卡片</Button>
                <Button variant="outlined" sx={{
                    width: '90%',
                    height: '39px',
                    borderRadius: '40px',
                    background: 'white',
                    color: '#11629A'
                }}>新用户？注册</Button>
                <Button variant="contained" sx={{
                    width: '90%',
                    height: '39px',
                    borderRadius: '40px',
                    background: '#11629A'
                }} onClick={() => setloginDialogActive(true)}>登录</Button>
                <Divider sx={{
                    width: '90%',
                    color: 'white',
                    background: '#cecece'
                }}/>
            </Stack>
            <Typography component="div" variant="caption" color="#cecece" sx={{
                m: '10px 0 0',
                transform: 'scale(0.9)'
            }}>信用卡申请进度查询</Typography>
            <LoginDialog open={loginDialogActive} onClose={() => setloginDialogActive(false)}/>
        </Box>
        <img src={template} style={{
            width: '100%'
        }}/>
    </>
}