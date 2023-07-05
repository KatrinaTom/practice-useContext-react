import React from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import { ThemeProvider } from './ThemeContext';

// ThemeProvider is responsible for updating and handling its interal state
export default function App() {
    return (
        <ThemeProvider>
            <FunctionContextComponent />
        </ThemeProvider>
    )
}