import React from 'react'

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

import InaccessibleAnimationDemo from "../components/bad/animation"
import AccessibleAnimationDemo from "../components/good/animation"

const ReducedMotionDemoPage = () => (
  <Layout>
    <SEO title="Reducing motion" keywords={['javascript', 'accessibility', 'react']} />
    <div>
        <h1>Reducing motion for accessibility</h1>
        <p>Let‘s build safe interfaces that delight.</p>
        <InaccessibleAnimationDemo />
        <AccessibleAnimationDemo />
    </div>
  </Layout>
)

export default ReducedMotionDemoPage
