import React from "react"

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

import RouteTargetHeading from "../components/better/route-target-heading.js"

import BadDropdown from '../components/bad/dropdown'
import BetterDropdown from '../components/better/dropdown'

const DropdownPage = () => (
  <Layout>
    <SEO title="Dropdown" keywords={['javascript', 'accessibility', 'react']} />
    <div>
      <RouteTargetHeading level={2} targetID="navigation">
        Dropdowns
      </RouteTargetHeading>
      <p>Tuck controls into an expandible, collapsible, accessible menu. Consider, however, whether you really need a dropdown.</p>
      <p>Keyboard interactions will depend on what's in the menu. List of links? The TAB key is fine.<br />UI actions with a button or radio buttons? Script the arrow keys.</p>

      <section className="two-col">
        <div>
          <h3>Bad link list dropdown [<a href="https://github.com/marcysutton/js-a11y-workshop/blob/master/src/components/bad/dropdown.js" aria-label="inaccessible demo source">source</a>]</h3>
          <BadDropdown activatorText="About" items={[{
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
        <div>
          <h3>Better link list dropdown</h3>
          <BetterDropdown items={[{
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
      </section>
    </div>
  </Layout>
)

export default DropdownPage


