import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const ComponenteHijoRedux = () => {
	const { counter } = useSelector((state) => state.counter);

	return (
		<Box>
			<Typography>
				Counter Redux desde componente hijo {counter}
			</Typography>
		</Box>
	);
};
