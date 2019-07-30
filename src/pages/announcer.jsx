import React from "react"

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

import RouteTargetHeading from "../components/better/route-target-heading.js"

import InaccessibleAsyncFormDemo from "../components/bad/async-form"
import LiveRegion from "../components/better/live-region"

const LiveRegionDemoPage = () => {
  return (
    <Layout>
      <SEO title="Live Regions" keywords={['javascript', 'accessibility', 'react']} />
      <div>
        <RouteTargetHeading level={2} targetID="navigation">
          Live Region Demo
        </RouteTargetHeading>
        <section className="two-col">
          <div>
          <h3>Inaccessible async form demo  [<a href="https://github.com/marcysutton/js-a11y-workshop/tree/master/src/components/bad/async-form.js" aria-label="accessible demo source">source</a>]</h3>
          <InaccessibleAsyncFormDemo />
          </div>
          <div>
          <h3>More accessible async form demo</h3>
            <LiveRegion />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default LiveRegionDemoPage


