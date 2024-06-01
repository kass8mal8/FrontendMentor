import { Box, ThemeProvider, createTheme } from "@mui/material";
import "./styles/css/index.css"
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Success from "./components/Success";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState({})
  const theme = createTheme({
    typography: {
      fontFamily: "roboto"
    }
  })
  return (  
    <ThemeProvider theme={theme}>
      <Box className='container'>
        <Routes>
          <Route path="/" element={<Home data={data} setData={setData} />} />
          <Route path="/success" element={<Success data={data} setData={setData} />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}
 
export default App;