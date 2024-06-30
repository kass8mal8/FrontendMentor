import { Box, Button } from "@mui/material";
import calculator from "../../assets/images/icon-calculator.svg";

const CalcButton = () => {
	return (
		<Box className="btn-container">
			<Button
				variant="contained"
				className="btn"
				fullWidth
				startIcon={<img src={calculator} alt="calculator" />}
			>
				Calculate Repayments
			</Button>
		</Box>
	);
};

export default CalcButton;
