import { Box, Stack } from "@mui/material";
import illustrationDesktop from "./assets/images/illustration-sign-up-desktop.svg"
import illustrationMobile from "./assets/images/illustration-sign-up-mobile.svg"

import "./styles/css/index.css"
import Hero from "./components/Hero";
import Form from "./components/Form";

const App = () => {
  const viewport = window.innerWidth
  return (  
    <Box className='container'>
      <Box className='right-side'>
        <img src={viewport <= 425 ? illustrationMobile : illustrationDesktop} alt='illustration' className='img' />
      </Box>
      <Box className='left-side'>
        <Hero />
        <Form />
      </Box>
    </Box>
  );
}
 
export default App;