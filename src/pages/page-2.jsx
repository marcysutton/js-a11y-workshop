import React from "react"

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

import { Heading } from "grommet"

const PageTwo = () => (
  <Layout>
    <SEO title="Home" keywords={['javascript', 'accessibility', 'react']} />
    <div style={{ padding: `1em` }}>
      <Heading level="2" margin="none">Page 2</Heading>
    </div>
  </Layout>
)

export default PageTwo


