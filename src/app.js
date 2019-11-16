import React from 'react'
import {ThemeProvider} from 'emotion-theming'
import Calculator from './calculator'
import * as themes from './themes'

class App extends React.Component {
  state = {theme: 'dark'}
  handleThemeChange = ({target: {value}}) => this.setState({theme: value})
  render() {
    return (
      <ThemeProvider theme={themes[this.state.theme]}>
        <React.Fragment>
          <Calculator />
          <div style={{marginTop: 30}}>
            Calculator component{' '}
            <a href="https://codepen.io/mjijackson/pen/xOzyGX">created</a>
            {' by '}
            <br />
            <a href="https://twitter.com/mjackson">Michael Jackson</a> of{' '}
            <a href="https://reacttraining.com/">React Training</a>
          </div>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default App
