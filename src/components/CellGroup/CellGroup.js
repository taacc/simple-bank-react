import React, {cloneElement} from "react";
import Box from '@mui/material/Box';
import { CellItem } from "../CellItem";
import Divider from '@mui/material/Divider';
export function CellGroup ({configuration = [], children}) {
    console.log(children, 'children')
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            m: '16px',
            borderRadius: '10px',
            background: 'white'
        }}>
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