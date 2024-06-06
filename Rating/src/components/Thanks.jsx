import { Box, Typography } from "@mui/material";
import thankyou from "../assets/images/illustration-thank-you.svg"
import { useContext } from "react";
import { RatingContext } from "../App";

const Thanks = () => {
    const { selected } = useContext(RatingContext)

    return (  
        <Box component={'div'} className="thanks">
            <img src={thankyou} alt="thanks" />
            <Box component={'aside'}>
                <Typography>You selected {selected} out of 5</Typography>
            </Box>

            <Box component={'section'}>
                <Typography variant="h5"> Thank you! </Typography>
                <Typography>
                    We appreciate you taking the time to give a rating. If you ever need more support, 
                    don’t hesitate to get in touch!
                </Typography>
            </Box>
        </Box>
    );
}
 
export default Thanks;