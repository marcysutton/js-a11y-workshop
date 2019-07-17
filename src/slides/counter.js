import React from 'react'
// import styled from '@emotion/styled'
// import { space, color } from 'styled-system'
import { css } from "styled-components"
import styled from "styled-components"

const Root = styled.div({
  display: 'flex',
  alignItems: 'center',
})

const Button = styled.button(
  {
    appearance: 'none',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'bold',
    borderRadius: '4px',
    border: 'none',
    width: '2em',
    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 0 2px magenta',
    },
  }
)
Button.defaultProps = {
  m: 0,
  px: 3,
  py: 2,
  color: 'background',
  bg: 'text',
}

const Samp = styled.samp`
`

export default class Counter extends React.Component {
  state = {
    count: 0,
  }

  inc = () => {
    this.setState(state => ({ count: state.count + 1 }))
  }

  dec = () => {
    this.setState(state => ({ count: state.count - 1 }))
  }

  render() {
    return (
      <Root>
        <Button onClick={this.dec} aria-label="previous slide">
          &lt;
        </Button>
        <Samp>{this.state.count}</Samp>
        <Button onClick={this.inc} aria-label="next slide">
          &gt;
        </Button>
      </Root>
    )
  }
}