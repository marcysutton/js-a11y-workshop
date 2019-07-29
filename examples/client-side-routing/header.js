import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header className="globalHeader">
    <ul className="skip-link">
      <li><a href="#skip-main">Skip to main</a></li>
    </ul>
    <h1>
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
