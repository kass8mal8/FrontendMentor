import { Box, Typography, Stack } from "@mui/material";
import { CurrencyPound } from "@mui/icons-material";

const Full = () => {
	// Formula
	// M=(1+r)n−1P×r×(1+r)n​

	return (
		<Box className="full">
			<Typography variant="h5"> Your results</Typography>

			<Typography>
				Your results are shown below based on the information you provided. To
				adjust the results, edit the form and click “calculate repayments”
				again.
			</Typography>

			<Box className="mortgage">
				<Typography>Your monthly repayments</Typography>
				<Stack className="stack" direction="row" alignItems={"center"} my={2}>
					<CurrencyPound sx={{ width: "50px", height: "50px" }} />
					<Typography variant="h4">192038</Typography>
				</Stack>
			</Box>
		</Box>
	);
};

export default Full;
