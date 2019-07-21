import React from "react"

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

import Dropdown from '../components/good/dropdown'
import Modal from '../components/modal'
import Carousel from '../components/carousel'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['javascript', 'accessibility', 'react']} />
    <div style={{ padding: `1.5em` }}>
      <h2>Let’s make the web more accessible!</h2>
      <Dropdown activatorText="About" items={[{
        text: 'Overview',
        url: '#'
      },{
        text: 'Our team',
        url: '#'
      },{
        text: 'Careers',
        url: '#'
      }]} />
      <button>Launch modal</button>
      <Modal />
      <Carousel />
    </div>
  </Layout>
)

export default IndexPage


