import React, {useState, forwardRef} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography'
import SvgIcon from '@mui/material/SvgIcon'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { ReactComponent as SettingIcon } from '../../../icon/setting.svg';
import { ReactComponent as ErrorIcon } from '../../../icon/error.svg';
import { styled } from "@mui/material/styles";



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
const TransferFailDialog = ({
    open, handleTransFerFailClose
}) => {
    return <InnerDialog TransitionComponent={Transition} onClose={handleTransFerFailClose} open={open}>
        <Stack direction="column" alignItems="center">
            <SvgIcon viewBox="0 0 1024 1024" component={ErrorIcon} sx={{
                fontSize: '70px',
                m: '30px 0 0'
            }}/>
            <DialogTitle color="initial">错误</DialogTitle>
            <DialogContent variant="h7" color="initial">对不起，我们无法处理您的请求，请稍后再试</DialogContent>
            <Button onClick={() => handleTransFerFailClose()} variant="text" sx={{
                m: '10px 0 20px'
            }}>确定</Button>
        </Stack>
    </InnerDialog>
}
export function TransferPage({ open, handleClose }) {
    const [transferFailDialogActive, setTransferFailDialog] = useState(false);
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Box sx={{
            height: '100%',
            background: 'linear-gradient(179deg, rgba(5,22,37,1) 22%, rgba(21,56,96,1) 100%);',
            color: 'white',
            p: '20px'
        }}>
            <Stack direction="row" justifyContent="flex-end" sx={{
                mb: '50px',
                position: 'relative'
            }}>
                <Typography variant="h7" color="white" sx={{
                    m: 'auto'
                }}>转账汇款</Typography>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                    sx={{
                        position: 'absolute',
                        right: '1%',
                        top: '50%',
                        transform: 'translateY(-50%)'
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </Stack>
            <Stack direction="row" justifyContent="center" spacing={15}>
                <Box 
                onClick= {() => setTransferFailDialog(true)}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <IconButton
                        component="div"
                        color="inherit"
                        aria-label="close"
                        sx={{
                            background: 'rgb(46,65,81)',
                            height: '70px',
                            width: '70px',
                            mb: '10px'
                        }}

                    >
                        <AllInclusiveIcon />
                    </IconButton>
                    <Typography variant="h7" color="white">手机号转账</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="close"
                        sx={{
                            background: 'rgb(46,65,81)',
                            height: '70px',
                            width: '70px',
                            mb: '10px'
                        }}
                    >
                        <ArrowCircleRightIcon />
                    </IconButton>
                    <Typography variant="h7" color="white">转账汇款</Typography>
                </Box>
            </Stack>
            <Typography component="div" variant="h7" color="white" sx={{
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: '80px'
            }}>
                <SvgIcon viewBox="0 0 1024 1024" component={SettingIcon} sx={{
                    fontSize: '30px',
                    mr: '10px'
                }}/>
                管理转账/收款账户
            </Typography>
        </Box>
      </Dialog>
      <TransferFailDialog open={transferFailDialogActive} handleTransFerFailClose={() => setTransferFailDialog(false)}/>
    </div>
  );
}