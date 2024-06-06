import { Box, ThemeProvider, createTheme } from '@mui/material'
import './styles/css/index.css';
import Btn from './components/Btn';
import Section from './components/Section';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'overpass'
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Box className='container'>
        <Section />
        <Btn />
      </Box>
    </ThemeProvider>
  )
}

export default App
