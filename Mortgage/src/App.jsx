import { Box, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/calculator/Header";
import Empty from "./components/result/Empty";
import Form from "./components/calculator/Form";

function App() {
	const theme = createTheme({
		typography: {
			fontFamily: "jakarta",
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Box className="container">
				<Box className="wrapper">
					<Box className="calculator">
						<Header />
						<Form />
					</Box>
					<Box className="result">
						<Empty />
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default App;
