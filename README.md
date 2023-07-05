# Practice React UseContext

How To Use Context In React With Hooks

Link to Article: https://blog.webdevsimplified.com/2020-06/use-context/

## Learning

**Part 1:**

* Difference between ClassComponents and FunctionComponents
* Global state or props that need to be passed to deeply nested components.

**Part 2:**

* In App.js, ThemeProvider is wrapping all the logic for handling and updating state to the children
* ThemeProvider is handling creating the state, updating state and persisting both of the different values down to the children
* Two custom hooks that provide easy access to the different values (Theme value and updating Theme value)

## Images

Difference in ClassContextComponents and FunctionComponents

<img src="images/light.png" width=500>

<img src="images/dark.png" width=500>

ClassContextComponents

<img src="images/ClassComponents.png" width=500>

FunctionContextComponents

<img src="images/FunctionContext.png" width=500>

App.js file

<img src="images/App.png" width=500>

___

Part 2: Using Hooks

<img src="images/p2Dark.png" width=500>

Added a ThemeContext, with two custom hooks

<img src="images/themeContext.png" width=500>

Cleaning up App.js file

<img src="images/p2App.png" width=500>

Updating FunctionContextComponent to use hooks (useTheme, updateTheme)

<img src="images/p2FunctionHooks.png" width=500>

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Start Script

In the project directory, you can run:

### `npm start`

[http://localhost:3000]













