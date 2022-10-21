import { useState } from "react";
import { ComponenteHijoContext } from "../components/ComponenteHijoContext";
import { MyCounterContext } from "./MyContext";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const ContextPage = () => {

    const [counter, setCounter] = useState(0);
    return (
        <Box sx={{ maring: "0", padding: "0" }}>
            <MyCounterContext.Provider value={counter}>
                <Typography variant="h5">Context  Page</Typography>
                <Typography>Counter Padre: {counter}</Typography>
                <ComponenteHijoContext />
                <Button onClick={() => setCounter(prev => prev + 1)} variant="outlined">sumar + 1 al context</Button>
            </MyCounterContext.Provider>
        </Box>
    );
};
