import React from "react"
import styled from "styled-components"

import theme from "../slides/theme"

const Figure = styled.figure`
  margin: 0;
  vertical-align: top;

  &.split {
    display: inline-block;
    min-width: auto;
  }
  &.left {
    margin-right: 1rem;
  }
  pre {
    margin: 0 !important;
  }

  figcaption {
    background-color: ${theme.colors.figcaptionBackground};
    box-sizing: border-box;
    color: ${theme.colors.figcaption};
    font-size: ${theme.figcaption.fontSize};
    font-weight: bold;
    margin-top: 0;
    padding: 0.5rem;
    text-align: left;
  }
`
const blockClassName = (side) => {
    if (side) {
        return `split ${side}`;
    }
    return null;
}
export default ({ title, side, children }) => (
<Figure className={blockClassName(side)}>
  { children }
  { title ?
    <figcaption>{ title }</figcaption> 
    : null }
</Figure>
)
