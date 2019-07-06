import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery } from 'gatsby'

// Grommet
import { Grommet, Grid, Box, ResponsiveContext } from 'grommet'

import Header from './header'
import Navigation from './navigation'
import './layout.scss'

// const Theme = {
//   global: {
//     breakpoints: {
//       small: {
//         value: '640px',
//       }
//     },
//   },
// };

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const Contents = ({data, children }) => (
    <>
      <Box gridArea="header" background="brand" as="header" className="globalHeader">
        <Header siteTitle={data.site.siteMetadata.title} />
      </Box>
      <Box gridArea="nav" as="nav">
          <Navigation />
        </Box>
      <Box gridArea="main" as="main">
        {children}
      </Box>
    </>
  )
  return (
    <Grommet>
      <ResponsiveContext.Consumer>
        {(size) => {
          if (size === 'small') {
            return (
              <div>
                <Contents data={data} children={children} />
              </div>
            )
          } else {
            return (
              <Grid
                rows={['min-content', 'auto']}
                columns={['1fr', '3fr']}
                style={{ height: `100vh` }}
                areas={[
                  { name: 'header', start: [0, 0], end: [1, 0] },
                  { name: 'nav', start: [0, 1], end: [0, 1] },
                  { name: 'main', start: [1, 1], end: [1, 1] },
                ]}
              >
                <Contents data={data} children={children} />
              </Grid>
            )
          }
        }}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
