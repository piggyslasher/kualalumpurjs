import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// import styled from 'styled-components'

// const Button = styled.button`
//   border: 2px solid red;
// `

import { Button } from './Button'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                    <p>
                      <Button>Find spoon</Button>
                      <Button primary>Find spoon</Button>
                    </p>
                </header>
                <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        )
    }
}

export default App
