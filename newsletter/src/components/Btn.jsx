import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const Btn = () => {
    const location = useLocation()
    return (  
        <Button type='submit' fullWidth variant='contained' className='btn'>
            
            { location.pathname === '/success' ? "Dismiss message" : "Subscribe to monthly newsletter" }
        </Button>
    );
}
 
export default Btn;