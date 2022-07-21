import React, {useRef} from "react";
import { Box } from "@mui/material";
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';

export function CellItem({children, render}) {
    console.log(children)
    const rippleRef = useRef(null);
    const onRippleStart = (e) => {
      rippleRef.current.start(e);
    };
    const onRippleStop = (e) => {
      rippleRef.current.stop(e);
    };
    return (
        <Box sx={{
            p: '12px 16px',
            position: 'relative'
        }}
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