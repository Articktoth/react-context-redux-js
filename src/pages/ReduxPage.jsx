import { useDispatch, useSelector } from 'react-redux';
import { ComponenteHijoRedux } from '../components/ComponenteHijoRedux';
import { sum } from "../store/counterSlice";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Divider } from '@mui/material';
import ReduxAPICall from "../components/ReduxAPICall"
export const ReduxPage = () => {
    const { counter } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <Box>
            <Typography variant="h5">Redux Page</Typography>
            <Typography>Counter: {counter}</Typography>
            <Button onClick={() => dispatch(sum())} variant="outlined"> Sumar 1</Button>
            <ComponenteHijoRedux />
            <Divider />
            <ReduxAPICall />
        </Box>
    );
};
