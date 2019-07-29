import React from 'react'

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

import RouteTargetHeading from "../components/better/route-target-heading.js"

import InaccessibleAnimationDemo from "../components/bad/animation"
import AccessibleAnimationDemo from "../components/better/animation"

const ReducedMotionDemoPage = () => (
  <Layout>
    <SEO title="Reducing motion" keywords={['javascript', 'accessibility', 'react']} />
    <div>
      <h2>
        Reducing motion for accessibility
      </h2>
      <p>Let‘s build safe interfaces that delight.</p>
      <section className="two-col">
        <div>
          <h3>Inaccessible animation demo [<a href="https://github.com/marcysutton/js-a11y-workshop/blob/master/src/components/bad/animation.js" aria-label="inaccessible demo source">source</a>]</h3>
          <InaccessibleAnimationDemo />
        </div>
        <div>
          <h3>More accessible animation demo</h3>
          <AccessibleAnimationDemo />
        </div>
      </section>
    </div>
  </Layout>
)

export default ReducedMotionDemoPage
