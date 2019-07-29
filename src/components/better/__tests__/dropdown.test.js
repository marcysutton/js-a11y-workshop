import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Dropdown from '../dropdown'

describe(`Dropdown`, () => {
  it(`renders activatorText`, () => {
    const activatorText = `Hamburgers`
    const { getByText } = render(<Dropdown activatorText={activatorText} />)

    const text = getByText(activatorText)

    expect(text).toBeInTheDocument()
  })
})
