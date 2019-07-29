import React, { useEffect, useState } from 'react'

const TabList = ({ items = [] }) => {
  const [isClient, setClient] = useState(false)
  /*
   * Think of this as componentDidMount
   * on the client, it will run once and update state
   */
  useEffect(() => {
    setClient(true)
  }, [])
  return (
    <ul {...isClient && { 'role': 'tablist' }}>
      {items.map(item => (
        <li key={item.id}
          {...isClient && { 'role': `tab` }}
        >
          {item.label}
        </li>
      ))}
    </ul>
  )
}

export default TabList