import { ThemeProvider, Typography, createTheme } from "@mui/material";

function App() {
	const theme = createTheme({
		typography: {
			fontFamily: "jakarta",
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Typography>Hello world</Typography>
		</ThemeProvider>
	);
}

export default App;
