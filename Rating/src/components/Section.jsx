import { Box, Typography } from "@mui/material";
import SelectRate from "./SelectRate";
import icon_star from "../assets/images/icon-star.svg";

const Section = () => {
    return (  
        <Box className="section" component={'aside'}>
            <img src={icon_star} alt="star" />
               
            <Typography variant='h5'>How did we do?</Typography>
            <Typography variant='body1'>
                Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!
            </Typography>

            <SelectRate />
        </Box>
    );
}
 
export default Section;