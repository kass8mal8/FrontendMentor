import { Box, ThemeProvider, createTheme } from '@mui/material'
import './styles/css/index.css';
import Section from './components/Section';
import { Route, Routes } from 'react-router-dom';
import Thanks from './components/Thanks';
import { createContext, useState } from 'react';

export const RatingContext = createContext({})

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'overpass'
    }
  })

  const [selected, setSelected] = useState(null)

  return (
    <RatingContext.Provider value={{selected, setSelected}}>
      <ThemeProvider theme={theme}>
        <Box className='container'>
          <Routes>
            <Route path='/' element={<Section />} />
            <Route path="thanks" element={<Thanks />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </RatingContext.Provider>
  )
}

export default App
