import { ContextPage } from "./ContextPage";
import { ReduxPage } from "./ReduxPage";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const Home = () => {
	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="left"
			spacing={5}
			sx={{ height: "100vh", padding: "0px", margin: "0px" }}
		>
			<Grid item>
				<ReduxPage />
			</Grid>
			<Grid item>
				<ContextPage />
			</Grid>
		</Grid>
	);
};

export default Home;
