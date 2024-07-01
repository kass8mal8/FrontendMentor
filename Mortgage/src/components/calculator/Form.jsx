import { Box, TextField, Typography, Stack } from "@mui/material";
import { CurrencyPound, Percent } from "@mui/icons-material";
import Type from "./Type";
import CalcButton from "./CalcButton";
import { useState } from "react";

const Form = () => {
	const [mortgageDetails, setMortgageDetails] = useState({});
	const handleChange = (e) => {
		setMortgageDetails({ ...mortgageDetails, [e.target.name]: e.target.value });
	};
	const handleSubmit = () => {};

	return (
		<form onSubmit={handleSubmit}>
			<Box my={2}>
				<Typography variant="body2" className="label">
					Mortgage Amount
				</Typography>
				<TextField
					name="amount"
					fullWidth
					onChange={handleChange}
					InputProps={{
						startAdornment: (
							<Box
								sx={{
									background: "hsl(202, 86%, 94%)",
									ml: -1.6,
									p: 1.4,
									height: "55px",
									alignItems: "center",
									mr: 1,
									// borderTopLeftRadius: "5px",
								}}
							>
								<CurrencyPound />
							</Box>
						),
					}}
					sx={{
						"&:focus-within fieldset, &:focus-visible fieldset": {
							border: "2px solid hsl(61, 70%, 52%)!important",
						},
						"& fieldset": {
							border: "2px solid hsl(203, 41%, 72%)!important",
							// borderWidth: "2px", // Change the border width here
						},
					}}
				/>
			</Box>
			<Stack my={2} className="stack">
				<Box>
					<Typography variant="body2" className="label">
						Mortgage Term
					</Typography>
					<TextField
						name="time"
						fullWidth
						onChange={handleChange}
						InputProps={{
							endAdornment: (
								<Box
									sx={{
										background: "hsl(202, 86%, 94%)",
										p: 1.7,
										mr: -1.6,
										height: "55px",
									}}
								>
									<Typography>years</Typography>
								</Box>
							),
						}}
						sx={{
							"&:focus-within fieldset, &:focus-visible fieldset": {
								border: "2px solid hsl(61, 70%, 52%)!important",
							},
							"& fieldset": {
								border: "2px solid hsl(203, 41%, 72%)!important",
								// borderWidth: "2px", // Change the border width here
							},
						}}
					/>
				</Box>
				<Box>
					<Typography variant="body2" className="label">
						Interest Rate
					</Typography>
					<TextField
						name="rate"
						fullWidth
						onChange={handleChange}
						InputProps={{
							endAdornment: (
								<Box
									sx={{
										background: "hsl(202, 86%, 94%)",
										p: 1.7,
										mr: -1.6,
										height: "55px",
									}}
								>
									<Percent />
								</Box>
							),
						}}
						sx={{
							"&:focus-within fieldset, &:focus-visible fieldset": {
								border: "2px solid hsl(61, 70%, 52%)!important",
							},
							"& fieldset": {
								border: "2px solid hsl(203, 41%, 72%)!important",
								// borderWidth: "2px", // Change the border width here
							},
						}}
					/>
				</Box>
			</Stack>
			<Type />
			<CalcButton />
		</form>
	);
};

export default Form;
