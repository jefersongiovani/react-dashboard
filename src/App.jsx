// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ControlPanel from './components/controlPanel';
import { menuItems } from './config/menuItems';
import { themeOptions } from './config/theme';

const theme = createTheme(themeOptions);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <ControlPanel menuItems={menuItems} />
            </Router>
        </ThemeProvider>
    );
}

export default App;