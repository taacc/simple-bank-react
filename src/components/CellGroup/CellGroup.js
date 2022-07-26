import React, {cloneElement} from "react";
import Box from '@mui/material/Box';
import { CellItem } from "../CellItem";
import Divider from '@mui/material/Divider';
export function CellGroup (props) {
    const { configuration = [], children, sx } = props;
    const styles = {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        background: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 2px 0px;'
    };
    const _sx = Object.assign({
        ...styles,
        ...sx
    })
    console.log(_sx, 'sx')
    return (
        <Box
        sx={_sx}>
            {
                configuration && configuration.length && configuration.map((cellProps, index) => 
                    <>
                        <CellItem key={index} link={!!cellProps.link} render={cellProps.render}>
                            {
                                cloneElement(
                                    children,
                                    cellProps
                                )
                            }
                        </CellItem>
                        {
                            index !== configuration.length - 1 ? <Divider /> : null
                        }
                    </>
                    )
            }
        </Box>
    )
}