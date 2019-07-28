import React from 'react'
import {css as emoCSS} from 'emotion'
import styled from '@emotion/styled'
import starWarsNames from 'starwars-names'
import matchSorter from 'match-sorter'

const allItems = starWarsNames.all.map(s => ({name: s, id: s.toLowerCase()}))

const css = (...args) => {
    console.log(args)
    return ({className: emoCSS(...args)})
}

const Item = styled('li')(
  {
    position: 'relative',
    cursor: 'pointer',
    display: 'block',
    border: 'none',
    height: 'auto',
    textAlign: 'left',
    borderTop: 'none',
    lineHeight: '1em',
    color: 'rgba(0,0,0,.87)',
    fontSize: '1rem',
    textTransform: 'none',
    fontWeight: '400',
    boxShadow: 'none',
    padding: '.8rem 1.1rem',
    whiteSpace: 'normal',
    wordWrap: 'normal',
  },
  ({isActive, isSelected}) => {
    const styles = []
    if (isActive) {
      styles.push({
        color: 'rgba(0,0,0,.95)',
        background: 'rgba(0,0,0,.03)',
      })
    }
    if (isSelected) {
      styles.push({
        color: 'rgba(0,0,0,.95)',
        fontWeight: '700',
      })
    }
    return styles
  },
)
const onAttention = '&:hover, &:focus'
const Input = styled('input')(
  {
    width: '100%', // full width - icon width/2 - border
    fontSize: '1rem',
    wordWrap: 'break-word',
    lineHeight: '1em',
    outline: 0,
    whiteSpace: 'normal',
    minHeight: '2em',
    background: '#fff',
    display: 'inline-block',
    padding: '1em 2em 1em 1em',
    color: 'rgba(0,0,0,1)',
    boxShadow: 'none',
    border: '1px solid rgba(34,36,38,1)',
    borderRadius: '.30rem',
    transition: 'box-shadow .1s ease,width .1s ease',
    [onAttention]: {
      borderColor: '#00b7f9',
      boxShadow: '0 2px 3px 0 rgba(34,36,38,.5)',
    },
  },
  ({isOpen}) =>
    isOpen
      ? {
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0',
          [onAttention]: {
            boxShadow: 'none',
          },
        }
      : null,
)

const Label = styled('label')({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  display: 'block',
  marginBottom: '0.25rem',
})

const BaseMenu = styled('ul')(
  {
    padding: 0,
    marginTop: 0,
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    maxHeight: '20rem',
    maxWidth: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    outline: '0',
    transition: 'opacity .1s ease',
    borderRadius: '0 0 .28571429rem .28571429rem',
    boxShadow: '0 2px 3px 0 rgba(34,36,38,.15)',
    borderColor: '#96c8da',
    borderTopWidth: '0',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: 'solid',
  },
  ({isOpen}) => ({
    border: isOpen ? null : 'none',
  }),
)

const Menu = React.forwardRef((props, ref) => (
  <BaseMenu ref={ref} {...props} />
))

const ControllerButton = styled('button')({
  backgroundColor: 'transparent',
  fontSize: '1rem',
  lineHeight: '1',
  border: 'none',
  position: 'absolute',
  right: 0,
  top: 0,
  cursor: 'pointer',
  width: 47,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
})

function ArrowIcon({isOpen}) {
  return (
    <svg
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      width={16}
      fill="transparent"
      stroke="#979797"
      strokeWidth="1.1px"
      transform={isOpen ? 'rotate(180)' : undefined}
    >
      <path d="M1,6 L10,15 L19,6" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      width={12}
      fill="transparent"
      stroke="#979797"
      strokeWidth="1.1px"
    >
      <path d="M1,1 L19,19" />
      <path d="M19,1 L1,19" />
    </svg>
  )
}

function getItems(filter) {
  return filter
    ? matchSorter(allItems, filter, {
        keys: ['name'],
      })
    : allItems
}

function getStringItems(filter) {
  return getItems(filter).map(({name}) => name)
}

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

async function getItemsAsync(filter, {reject}) {
  await sleep(Math.random() * 2000)
  if (reject) {
    // this is just so we can have examples that show what happens
    // when there's a request failure.
    throw new Error({error: 'request rejected'})
  }
  return getItems(filter)
}

const itemToString = i => (i ? i.name : '')

export {
  Menu,
  ControllerButton,
  Input,
  Item,
  ArrowIcon,
  XIcon,
  Label,
  css,
  itemToString,
  getItems,
  getStringItems,
  getItemsAsync,
}