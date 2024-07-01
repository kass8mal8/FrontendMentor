import { Box, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/calculator/Header";
import Empty from "./components/result/Empty";
import Form from "./components/calculator/Form";
import Full from "./components/result/Full";
import { useState } from "react";

function App() {
	const theme = createTheme({
		typography: {
			fontFamily: "jakarta",
		},
	});
	const [result, setResult] = useState(null);

	return (
		<ThemeProvider theme={theme}>
			<Box className="container">
				<Box className="wrapper">
					<Box className="calculator">
						<Header />
						<Form setResult={setResult} />
					</Box>
					<Box className="result">
						{result ? <Full result={result} /> : <Empty />}
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default App;
