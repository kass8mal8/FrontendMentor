import { Typography } from "@mui/material";

const Type = () => {
	return (
		<ul>
			<Typography variant="h6">Mortgage Type</Typography>
			<li>
				<input type="radio" name="mortgage_type" value="repayment" />
				<Typography>Repayment</Typography>
			</li>
			<li>
				<input type="radio" name="mortgage_type" value="interest" />
				<Typography>Interest Only</Typography>
			</li>
		</ul>
	);
};

export default Type;
