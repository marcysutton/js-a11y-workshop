import React from "react"

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'


const SemanticsPage = () => (
  <Layout>
    <SEO title="Semantics" keywords={['javascript', 'accessibility', 'react']} />
    <div>
        <h2>Semantics and Grid layout</h2>
        <p>CSS layouts are modern now. You can use CSS grid!!</p>

        <section className="grid-layout">
            <div data-el="div" className="wrap">
                <header data-el="header role=[header]" role="header">
                    <h3>Layout Demo</h3>
                </header>
                <article data-el="article role=[group]" role="group">
                    <p>Doggo ipsum stop it fren borking doggo shoober floofs, very jealous pupper thicc. Pats smol borking doggo with a long snoot for pats blop pupper, borking doggo wrinkler. Lotsa pats big ol pupper h*ck heckin angery woofer pupper, blop heckin mlem.</p>
                </article>
            </div>
        </section>
    </div>
  </Layout>
)

export default SemanticsPage


