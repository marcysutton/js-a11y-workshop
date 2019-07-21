import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { Heading } from "grommet"

const Header = ({ siteTitle }) => (
  <>
    <ul className="skip-link">
      <li><a href="#main">Skip to main</a></li>
    </ul>
    <Heading level="1" margin="none" size="medium">
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </Heading>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
