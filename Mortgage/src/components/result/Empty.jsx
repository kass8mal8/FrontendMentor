import { Box } from "@mui/material";
import empty from "../../assets/images/illustration-empty.svg";

const Empty = () => {
	return (
		<Box clssName="empty">
			<img src={empty} alt="illustration-empty" />
		</Box>
	);
};

export default Empty;
