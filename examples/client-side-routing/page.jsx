import React from "react"

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

import RouteTargetHeading from "./route-target-heading.js"

const HeadingDemoPage = () => {
  return (
    <Layout>
      <SEO title="Heading demo" keywords={['javascript', 'accessibility', 'react']} />
      <div>
        <RouteTargetHeading
          level={2}
          targetID="navigation"
          >
          Heading Demo
        </RouteTargetHeading>
      </div>
    </Layout>
  )
}

export default HeadingDemoPage


