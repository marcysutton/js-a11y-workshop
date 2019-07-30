import React from "react"

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

import RouteTargetHeading from "../components/better/route-target-heading.js"

const LayoutPage = () => (
  <Layout>
    <SEO title="Semantics" keywords={['javascript', 'accessibility', 'react']} />
    <div>
        <RouteTargetHeading level={2} targetID="navigation">
            Semantics and CSS layout
        </RouteTargetHeading>
        <p>CSS layouts are modern now. You can use CSS Grid and HTML5! Inspect these semantic layouts in DevTools and screen readers. Play with the rotor/elements list, heading navigation, </p>
        <p><strong>[<a href="https://github.com/marcysutton/js-a11y-workshop/blob/master/src/pages/layout.jsx">page source</a>]</strong></p>
        <div className="semantic-layout">
            <div data-el="div" className="grid-wrap-2">
                <div data-el="div">
                    <div className="heading level-3">DIVs all the way down</div>
                    <div data-el="div" className="fake-list">
                        <div>
                            <div><a href="#">Turkey</a></div>
                            <div><a href="#">Gooberface</a></div>
                        </div>
                    </div>
                </div>
                <div data-el="div">
                    <p>Doggo ipsum stop it fren borking doggo shoober floofs, very jealous pupper thicc. Pats smol borking doggo with a long snoot for pats blop pupper, borking doggo wrinkler. Lotsa pats big ol pupper h*ck heckin angery woofer pupper, blop heckin mlem.</p>
                </div>
            </div>
        </div>

        <section className="semantic-layout" data-el="section [role=region]">
            <div data-el="div" className="grid-wrap-2">
                <header data-el="header role=[header]">
                    <h3>HTML5 and CSS Grid Layout</h3>
                    <nav data-el="nav role[nav]">
                        <ul>
                            <li><a href="#">Cheddarino</a></li>
                            <li><a href="#">Sweet Pupper</a></li>
                        </ul>
                    </nav>
                </header>
                <article data-el="article role=[group]">
                    <h3>Maximum borkdrive</h3>
                    <p>Very hand that feed shibe puggorino very taste wow.  Maximum borkdrive much ruin diet very hand that feed shibe very taste wow long water shoob doge doggo heckin, shoober ruff shoob wrinkler bork much ruin diet. he made many woofs woofer. Wow such tempt mlem very hand that feed shibe porgo, wrinkler shoob. Vvv puggo doggorino very good spot such treat length boy puggo, woofer heckin angery woofer wow very biscit pupperino very taste wow.</p>
                </article>
            </div>
        </section>
    </div>
  </Layout>
)

export default LayoutPage


