import React, {useState, forwardRef} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TransferFailDialog = ({
    open, handleTransFerFailClose
}) => {
    return <Dialog onClose={handleTransFerFailClose} open={open}>
      <DialogTitle>对不起，我们无法处理您的请求，请稍后再试</DialogTitle>
    </Dialog>
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
            background: 'rgb(9,34,56)',
            color: 'white',
            p: '20px'
        }}>
            <Stack direction="row" justifyContent="flex-end" sx={{
                mb: '100px'
            }}>
                <Typography variant="h7" color="white" sx={{
                    m: 'auto'
                }}>转账汇款</Typography>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
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
                        edge="start"
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
                        edge="start"
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
        </Box>
      </Dialog>
      <TransferFailDialog open={transferFailDialogActive} handleTransFerFailClose={() => setTransferFailDialog(false)}/>
    </div>
  );
}