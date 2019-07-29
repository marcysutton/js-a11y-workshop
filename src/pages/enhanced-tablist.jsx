import React from "react"

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

import RouteTargetHeading from "../components/better/route-target-heading.js"

import EnhancingList from "../components/better/enhancing-list"

const ProgressiveEnhancementPage = () => {
  return (
    <Layout>
      <SEO title="Progressive Enhancement demos" keywords={['javascript', 'accessibility', 'react']} />
      <div>
        <RouteTargetHeading
          level={2}
          targetID="navigation"
        >
          Progressive Enhancement Demo
        </RouteTargetHeading>
        <p>This widget outputs an unordered list in HTML at build time, with ARIA role enhancements when JavaScript loads.</p>
        <p>To test this demo: run <code>gatsby build && gatsby serve</code> and turn off JavaScript in your browser</p>
        <p><strong>[<a href="https://github.com/marcysutton/js-a11y-workshop/blob/master/src/components/better/enhancing-list.js">component source</a>]</strong></p>
        <EnhancingList items={[
            {id:0, label:'tab 1'},
            {id:1, label:'tab 2'}
        ]} />
      </div>
    </Layout>
  )
}

export default ProgressiveEnhancementPage


