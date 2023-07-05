import React, { Component } from 'react';
import { ThemeContext } from './App';

export default class ClassContextComponent extends Component {
    themeStyles(dark) {
        return {
            backgroundColor: dark ? '#333' : '#CCC',
            color: dark ? '#CCC' : '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }

    // darkTheme is the function that will pass the value 
    render() {
        return (
            <ThemeContext.Consumer>
            {darkTheme => {
                return <div style={this.themeStyles(darkTheme)}>Class Theme</div>
            }}
            </ThemeContext.Consumer>
        )
    }
}

