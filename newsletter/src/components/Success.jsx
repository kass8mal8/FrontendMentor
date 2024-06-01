import { Box, Button, Typography } from "@mui/material";
import icon from "../assets/images/icon-list.svg"
import Btn from "./Btn";

const Success = ({ data }) => {
    return (  
        <Box className='success'>
            <img src={icon} />
            <Typography variant="h3"> Thanks for subscribing! </Typography>
            <Typography>
                A confirmation email has been sent to <span style={{color: 'hsl(234, 29%, 20%)', fontWeight: 600}}>{data}</span>. 
                Please open it and click the button inside to confirm your subscription.
            </Typography>
            <Btn />
        </Box>
    );
}
 
export default Success;