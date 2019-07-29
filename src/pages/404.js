import React from 'react'

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

import RouteTargetHeading from "../components/better/route-target-heading.js"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <RouteTargetHeading
      level={2}
      targetID="navigation"
    >
      NOT FOUND
    </RouteTargetHeading>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
