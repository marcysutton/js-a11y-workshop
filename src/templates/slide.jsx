// example Layout.js
import React from 'react'
import { css } from "styled-components"
import styled from "styled-components"

const headerFooterStyles = css`
  font-size: 14px;
  left: 0;
  padding: 0.5em;
  position: absolute;
  text-align: left;
  width: 100%;
`
const Header = styled.header`
  top: 0;
  ${headerFooterStyles}
`
const Footer = styled.footer`
  bottom: 0;
  ${headerFooterStyles}
`
const P = styled.p`
  display: inline-block;
  font-size: inherit;
  margin-right: auto;
`
const H1 = styled.h1`
  font-size: inherit;
  font-weight: normal;
  text-align: center;
`
export default ({ children }) => (
  <>
    <Header>
      <P>
        <a href="/">back to app</a>
      </P>
    </Header>
    <main>
      {children}
    </main>
    <Footer css={headerFooterStyles}>
      <H1>
        Slides: Accessibility in JavaScript Applications ~  <span>by <a href="https://twitter.com/marcysutton">@marcysutton</a></span>
      </H1>
    </Footer>
  </>
)
