import React from "react"

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

import RouteTargetHeading from "../components/better/route-target-heading.js"

import EnhancingList from "../components/better/tab-list"

const ProgressiveEnhancementPage = () => {
  return (
    <Layout>
      <SEO title="Progressive Enhancement demos" keywords={['javascript', 'accessibility', 'react']} />
      <div>
        <h2>
          Progressive Enhancement Demo
        </h2>
        <p>The goal of an enhanced widget is to output plain HTML markup at build time, with ARIA role enhancements when JavaScript loads.</p>
        <p>To test this kind of demo: run <code>gatsby build && gatsby serve</code> and turn off JavaScript in your browser</p>
        <p><strong>[<a href="https://github.com/marcysutton/js-a11y-workshop/blob/master/src/components/better/tab-list.js">starter component source</a>]</strong></p>
        <EnhancingList items={[
            {id:0, label:'tab 1'},
            {id:1, label:'tab 2'}
        ]} />
      </div>
    </Layout>
  )
}

export default ProgressiveEnhancementPage


