import React from "react"

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

import InaccessibleAsyncFormDemo from "../components/bad/async-form"
import BetterAsyncFormDemo from "../components/better/async-form"

const LiveRegionDemoPage = () => {
  return (
    <Layout>
      <SEO title="Live Regions" keywords={['javascript', 'accessibility', 'react']} />
      <div>
        <h2>Live Region Demo</h2>
        <section className="two-col">
          <div>
          <h3>Inaccessible async form demo  [<a href="https://github.com/marcysutton/js-a11y-workshop/tree/master/src/components/bad/async-form.js" aria-label="accessible demo source">source</a>]</h3>
          <InaccessibleAsyncFormDemo />
          </div>
          <div>
          <h3>More accessible async form demo [<a href="https://github.com/marcysutton/js-a11y-workshop/blob/master/src/components/better/async-form.js" aria-label="accessible demo source">source</a>]</h3>
            <BetterAsyncFormDemo />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default LiveRegionDemoPage


