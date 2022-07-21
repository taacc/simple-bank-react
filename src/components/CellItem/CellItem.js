import React, {useRef} from "react";
import { Box } from "@mui/material";
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';

export function CellItem({children, render, sx}) {
    const rippleRef = useRef(null);
    const onRippleStart = (e) => {
      rippleRef.current.start(e);
    };
    const onRippleStop = (e) => {
      rippleRef.current.stop(e);
    };
    const styles = {
        p: '12px 16px',
        position: 'relative'
    };
    const _sx = Object.assign({
        ...styles,
        ...sx
    })
    return (
        <Box sx={_sx}
            onMouseDown={onRippleStart}
            onMouseUp={onRippleStop}
        >
            {
                render ? render() : children
            }
            <TouchRipple ref={rippleRef} center={false} />
        </Box>
    )
}