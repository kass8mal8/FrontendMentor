import Hero from "./Hero";
import Form from "./Form";
import { Box } from "@mui/material";

import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg"
import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg"


const Home = ({ data, setData }) => {
    const viewport = window.innerWidth
    return (  
        <Box className='home'>
            <Box className='right-side'>
                <img src={viewport <= 425 ? illustrationMobile : illustrationDesktop} alt='illustration' className='img' />
            </Box>
            <Box className='left-side'>
                <Hero />
                <Form data={data} setData={setData} />
            </Box>
        </Box>
    );
}
 
export default Home;