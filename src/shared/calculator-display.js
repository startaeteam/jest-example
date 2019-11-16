import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import AutoScalingText from './auto-scaling-text'
import {getFormattedValue} from './utils'

const DisplayContainer = styled.div(({theme}) => ({
  color: theme.displayTextColor,
  background: theme.displayBackgroundColor,
  lineHeight: '130px',
  fontSize: '6em',
  flex: '1',
}))

class CalculatorDisplay extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
  }
  render() {
    const {value, ...props} = this.props
    const formattedValue = getFormattedValue(
      value,
      typeof window === 'undefined' ? 'en-US' : window.navigator.language,
    )

    return (
      <div
        id="hi"
        {...props}
        css={{
          color: 'white',
          background: '#1c191c',
          lineHeight: '130px',
          fontSize: '6em',
          flex: '1',
        }}
      >
        <span>
          <AutoScalingText>{formattedValue}</AutoScalingText>
        </span>      
      </div>
    )
  }
}

export default CalculatorDisplay
