import React from 'react'

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

import RouteTargetHeading from "../components/better/route-target-heading.js"

import InaccessibleCardFlip from "../components/bad/card-flip"
import BetterCardFlip from "../components/better/card-flip"

import rainierImg from "../images/rainier-headshot.jpg"
import bagleyImg from "../images/bagley.jpg"

const friends = [{
  name: 'Rainier McCheddarton',
  headshot: rainierImg,
  subtitle: 'Labradoodle, squeaker, cheese fan',
  bio: 'Doggo ipsum very hand that feed shibe heckin good boys and girls fat boi much ruin diet you are doing me the shock wrinkler length boy, I am bekom fat lotsa pats dat tungg tho shooberino.',
  twitterLink: 'http://twitter.com'
},
{
  name: 'Bagley Fluffpants',
  headshot: bagleyImg,
  subtitle: 'Cheshire cat, supreme loaf',
  bio: "The door is opening! how exciting oh, it's you, meh drink water out of the faucet. Spend six hours per day washing, but still have a crusty butthole, so lies down or sit on human they not getting up ever, but lick human with sandpaper tongue.",
  twitterLink: 'http://twitter.com'
}]

const ReducedMotionDemoPage = () => (
  <Layout>
    <SEO title="Reducing motion" keywords={['javascript', 'accessibility', 'react']} />
    <div>
      <RouteTargetHeading level={2} targetID="navigation">
        Reducing motion for accessibility
      </RouteTargetHeading>
      <p>Let‘s build safe interfaces that delight.</p>
      <section className="two-col">
        <div>
          <h3>Inaccessible animation demo <br />
          [<a href="https://github.com/marcysutton/js-a11y-workshop/blob/master/src/components/bad/card-flip.js">source 1</a>]</h3>
          <InaccessibleCardFlip
            member={friends[0]}
            memberName={friends[0].name}
            image={friends[0].headshot}
            subtitle={friends[0].subtitle}
            bio={friends[0].bio}
            twitterLink={friends[0].twitterLink} />
        </div>
        <div>
          <h3>Animation demo 2: add styles <br />
          [<a href="https://github.com/marcysutton/js-a11y-workshop/blob/master/src/components/better/card-flip.js">source 2</a>]</h3>
          <BetterCardFlip
            member={friends[1]}
            memberName={friends[1].name}
            image={friends[1].headshot}
            subtitle={friends[1].subtitle}
            bio={friends[1].bio}
            twitterLink={friends[1].twitterLink} />
        </div>
      </section>
    </div>
  </Layout>
)

export default ReducedMotionDemoPage
