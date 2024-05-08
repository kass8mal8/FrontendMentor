import { Box, ListItem, ListItemIcon, Stack, Typography } from "@mui/material";
import listIcon from "../assets/images/icon-list.svg"

const Hero = () => {
    return (  
        <Box className='hero'>
            <Typography variant="h3"> Stay updated! </Typography>
            <Typography>Join 60,000+ product managers receiving monthly updates on:</Typography>

            <ul>
                <li>
                    <Stack direction='row' spacing={2}>
                        <img src={listIcon} alt="icon" />
                        <Typography>Product discovery and building what matters</Typography>
                    </Stack>
                </li>
                <li>
                    <Stack direction='row' spacing={2}>
                        <img src={listIcon} alt="icon" />
                        <Typography>Measuring to ensure updates are a success</Typography>
                    </Stack>
                </li>
                <li>
                    <Stack direction='row' spacing={2}>
                        <img src={listIcon} alt="icon" />
                        <Typography>And much more!</Typography>
                    </Stack>
                </li>
            </ul>
        </Box>
    );
}
 
export default Hero;