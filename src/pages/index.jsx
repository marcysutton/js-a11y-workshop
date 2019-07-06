import React from "react"

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Heading } from "grommet"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['javascript', 'accessibility', 'react']} />
    <div style={{ padding: `1em` }}>
      <Heading level="2" margin="none"> Hi people</Heading>
    </div>
  </Layout>
)

export default IndexPage


