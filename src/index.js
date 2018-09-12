// src/index.js

import React from 'react'
import { render } from 'react-dom'
import LoginContainer from "./LoginContainer.js";

// Import some styles
//import './styles/App.css'

// Create main App component
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, this is your first Electron app!</h1>

        <p>I hope you enjoy using this electron react app.</p>
        <LoginContainer/>
      </div>
    )
  }
}

// Render the application into the DOM, the div inside index.html
render(<App />, document.getElementById('root'))
