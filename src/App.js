import React, { useState } from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import ClassContextComponent from './ClassContextComponent';

// use this component in the rest of the application
export const ThemeContext = React.createContext();

export default function App() {
    // Single state set up toggle true false for dark theme
    const [darkTheme, setDarkTheme] = useState(true)

    // function to toggle the theme 
    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    // two sections, context Provider wrap all your code that needs access to the variable prop (darkTheme)
    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <FunctionContextComponent />
                <ClassContextComponent />
            </ThemeContext.Provider>
        </>
    )
}