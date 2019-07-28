import React from 'react'
import { useDeck } from 'gatsby-theme-mdx-deck'

function AtTheBottomCenter ({ children }) {
  const css = {
    fontSize: '1.15rem',
    padding: '0.5em',
    position: 'absolute',
    right: 0,
    top: 0,
    textAlign: 'right',
  }

  return <nav css={css} aria-label={`Slide ${children[0]} of ${children[2]}`}>
    {children}
  </nav>
}

export default function Provider ({ children, ...props }) {
  const deck = useDeck()
  const { index, length } = deck

  return <>
    {children}
    <AtTheBottomCenter>{index}/{length}</AtTheBottomCenter>
  </>
}
