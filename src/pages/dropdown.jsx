import React from "react"

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

import GoodDropdown from '../components/good/dropdown'

const DropdownPage = () => (
  <Layout>
    <SEO title="Dropdown" keywords={['javascript', 'accessibility', 'react']} />
    <div style={{ padding: `1.5em` }}>
      <h2>Dropdowns</h2>
      <GoodDropdown activatorText="About" items={[{
        text: 'Overview',
        url: '#'
      },{
        text: 'Our team',
        url: '#'
      },{
        text: 'Careers',
        url: '#'
      }]} />
    </div>
  </Layout>
)

export default DropdownPage


