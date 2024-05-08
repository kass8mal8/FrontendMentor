import { TextField, Typography, Box, Stack, touchRippleClasses } from "@mui/material";
import Btn from "./Btn";
import { useState, useEffect } from "react";

const Form = () => {
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState({})
    const checkCom = ['.com']
    let checkAt = false
    let comCheck = false

    const handleChange = (e) => {
        setData(e.target.value)
    }

    // console.log(data)
    

    const handleSubmit = (e) => {
        setIsError(false)
        e.preventDefault()

        comCheck = checkCom.includes(data.slice(-4)) && true
        for(let x of data) if(x === '@') checkAt = true

        !(checkAt && comCheck) ? setIsError(true) : setIsError(false)
        console.log(checkAt, comCheck)

    }

    useEffect(() => {
        console.log('Error', isError)
    }, [isError]);

    return (  
        <Box className='form'>
            <form onSubmit={handleSubmit}>
                <Stack my={1} direction='row' justifyContent='space-between' alignItems="center" >
                    <Typography variant='h6'>Email address</Typography>
                    <Typography variant='body2' sx={{ color: isError && 'hsl(4, 100%, 67%)' }}>{ isError && 'Valid email required' }</Typography>
                </Stack>
                <TextField 
                    fullWidth 
                    name='email'
                    placeholder="email@company.com" 
                    type="text" 
                    onChange={handleChange}
                    InputProps={{
                        sx: {
                            borderRadius: '10px',
                            '&:focus-within fieldset, &:focus-visible fieldset': {
                                borderColor: isError && 'hsl(4, 100%, 67%)!important'
                            },
                        }
                    }}
                />

                <Btn />
            </form>
        </Box>
    );
}
 
export default Form;