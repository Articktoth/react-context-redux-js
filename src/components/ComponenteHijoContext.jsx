import React, { useContext } from 'react';
import { MyCounterContext } from '../pages/MyContext';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const ComponenteHijoContext = () => {
    const myContextCounter = useContext(MyCounterContext);
    return (
        <Box>
            <Typography>
                ComponenteHijoContext: {myContextCounter}
            </Typography>
        </Box>
    );
};
