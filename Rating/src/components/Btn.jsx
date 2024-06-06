import { Button } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RatingContext } from "../App";

const Btn = () => {
    const navigate = useNavigate()
    const { selected } = useContext(RatingContext)

    const handleSubmit = () => {
        selected && navigate('/thanks')
    }

    return ( 
        <Button className="btn" variant="contained" onClick={handleSubmit}>
            submit
        </Button>
     );
}
 
export default Btn;