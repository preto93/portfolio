import { createTheme } from '@mui/material';

const customTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#1A1A2E',
            
        },
        secondary: {
            main: '#16213E',
          
        },
        third: {
            main: '#0F3460',
        },
        info: {
            main: '#E94560'
        }
    },
    
});

export default customTheme;