import React from "react"
import styled from "@emotion/styled"

import theme from "../../theme"

const Figure = styled.figure`
  font-size: 1.15rem;
  margin: 0;
  vertical-align: top;

  &.split {
    display: inline-block;
    min-width: auto;
  }
  &.center {
    margin: 0 auto;
    min-width: 80%;
  }
  &.left {
    margin-right: 1rem;
  }
  &.noRightMargin {
    margin-right: 0;
  }
  pre {
    margin: 0 !important;
  }

  figcaption {
    background-color: ${theme.colors.figcaptionBackground};
    box-sizing: border-box;
    color: ${theme.colors.figcaption};
    font-size: ${theme.styles.figcaption.fontSize};
    font-weight: bold;
    margin-top: 0;
    padding: 0.5rem;
    text-align: left;

    a {
      color: inherit;
    }
  }
`
const blockClassName = (side, marginClass) => {
  let margin = '';
  if (marginClass) {
    margin = marginClass;
  }
  if (side) {
      return `split ${side} ${margin}`;
  }
  return null;
}
export default ({ title, side, url, marginClass, children }) => (
  <Figure className={blockClassName(side, marginClass)}>
    { children }
    { title ?
      <figcaption>
        { url ? <a href={url}>{title}</a> : title }
      </figcaption> 
      : null }
  </Figure>
)
