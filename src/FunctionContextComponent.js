import React from 'react';
import { useTheme, useThemeUpdate } from './ThemeContext';

// This is how you useContext
// 1. import { useContext }
// 2. import the theme. This case we used { ThemeContext }, all located in ./App
// 3. Declare the variable darkTheme = useContext(ThemeContext)
// 4. Add the themeStyles (the colours)

// Function component is much cleaner than the class component

export default function FunctionContextComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
            color: darkTheme ? '#CCC' : '#333',
            padding: '2rem',
            margin: '2rem'
    }

    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>Function Theme</div>
        </>
    ) 
}