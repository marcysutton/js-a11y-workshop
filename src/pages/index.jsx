import React from "react"

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['javascript', 'accessibility', 'react']} />
    <div>
      <h2>
        Let’s make the web more accessible!
      </h2>
      <p>Here are some web accessibility tools, resources, and books for web designers and developers.</p>   

      <h3 id="Testing-Tools">Testing Tools</h3>
      <ul>
        <li><a href="https://deque.com/axe/">aXe by Deque</a></li>
        <li><a href="https://www.npmjs.com/package/cypress-axe">Cypress-axe</a></li>
        <li><a href="https://github.com/evcohen/eslint-plugin-jsx-a11y">eslint-plugin-jsx-a11y</a></li>
        <li><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a></li>
        <li><a href="https://accessibilityinsights.io">Accessibility Insights for Web</a></li>
        <li><a href="https://wave.webaim.org/">WAVE</a></li>
        <li><a href="https://developer.paciellogroup.com/resources/contrastanalyser/">Color Contrast Analyzer</a></li>
        <li><a href="https://addons.mozilla.org/en-US/firefox/addon/web-developer/">Firefox Web Developer Extension</a></li>
        <li><a href="https://gist.github.com/marcysutton/0a42f815878c159517a55e6652e3b23a">Chrome Accessibility Inspector</a></li>
        <li><a href="https://developers.google.com/web/updates/2018/01/devtools#contrast">Chrome Color Contrast Debugger</a></li>
        <li><a href="https://marcysutton.com/angular-protractor-accessibility-plugin/">Protractor Accessibility Plugin</a></li>
        <li><a href="https://a11ysupport.io/">Accessibility Support matrix</a></li>
      </ul>

      <h3>Screen reader cheat sheets</h3>
      <ul>
        <li><a href="https://webaim.org/articles/voiceover/">Voiceover</a></li>
        <li><a href="https://webaim.org/articles/nvda/">NVDA</a></li>
        <li><a href="https://webaim.org/articles/jaws/">JAWS</a></li>
      </ul>

      <h3>Framework accessibility docs</h3>
      <ul>
        <li><a href="https://reactjs.org/docs/accessibility.html">Reactjs.org</a></li>
        <li><a href="https://guides.emberjs.com/release/reference/accessibility-guide/">Emberjs.com</a></li>
        <li><a href="https://angular.io/guide/accessibility">Angular.io</a></li>
        <li><a href="https://facebook.github.io/react-native/docs/accessibility">React Native</a></li>
        <li><a href="https://ionicframework.com/docs/native/mobile-accessibility">Ionic mobile framework</a></li>
      </ul>

      <h3 id="Resources">Resources</h3>
      <ul>
        <li><a href="http://a11yproject.com/">A11y Project</a></li>
        <li><a href="https://dequeuniversity.com">Deque University</a></li>
        <li><a href="http://webaim.org">WebAIM</a></li>
        <li><a href="https://www.w3.org/WAI/">Web Accessibility Initiative at the W3C</a></li>
        <li><a href="https://www.w3.org/TR/WCAG21/">Web Content Accessibility Guidelines</a></li>
        <li><a href="https://www.w3.org/TR/wai-aria-practices-1.1/">ARIA Authoring Practices Guide</a></li>
        <li><a href="https://www.w3.org/TR/using-aria/">The Rules of ARIA</a> from the W3C</li>
        <li><a href="https://www.w3.org/WAI/standards-guidelines/mobile/">Mobile Accessibility at W3C</a></li>
        <li><a href="https://webaim.org/resources/designers/">Web Accessibility for Designers</a></li>
        <li><a href="https://a11y-style-guide.com/style-guide/section-resources.html">A11y Style Guide</a></li>
        <li><a href="https://www.skillshare.com/classes/Hacking-Digital-Styleguides-for-Accessibility-Type-Color-Imagery/1920202818">Hacking Digital Styleguides for Accessibility</a> by Tatiana T. Mac</li>
        <li><a href="https://www.udacity.com/course/web-accessibility--ud891">Google/Udacity Web Accessibility course</a></li>
        <li><a href="https://egghead.io/courses/start-building-accessible-web-applications-today">Egghead.io: Start Building Accessible Web Applications Today</a></li>
        <li><a href="https://a11ywins.tumblr.com">Accessibility Wins</a></li>
        <li><a href="https://a11yproject.com/follow/">Who to follow in accessibility</a></li>
      </ul>
      <h3 id="Books">Books</h3>
      <ul>
        <li><a href="http://www.lflegal.com/book/">Structured Negotiation</a></li>
        <li><a href="https://www.smashingmagazine.com/inclusive-design-patterns/">Inclusive Design Patterns</a></li>
        <li><a href="/smashing-book-6">Smashing Book 6: New Frontiers in Web Design</a></li>
        <li><a href="https://abookapart.com/products/accessibility-for-everyone">Accessibility for Everyone</a></li>
        <li><a href="https://shop.smashingmagazine.com/products/apps-for-all">Apps for All: Coding Accessible Web Applications</a></li>
        <li><a href="https://www.smashingmagazine.com/printed-books/form-design-patterns/">Form Design Patterns</a></li>
        <li><a href="https://shop.smashingmagazine.com/products/practical-approaches-for-designing-accessible-websites">Practical Approaches for Building Accessible Websites</a></li>
        <li><a href="https://play.google.com/store/books/details?id=g1QBFJxB_eEC&amp;source=productsearch&amp;utm_source=HA_Desktop_US&amp;utm_medium=SEM&amp;utm_campaign=PLA&amp;pcampaignid=MKTAD0930BO1&amp;gl=US&amp;gclid=CIneyIOpgssCFczYfgodYAQGMg&amp;gclsrc=ds">Don't Make Me Think</a></li>
        <li><a href="http://rosenfeldmedia.com/books/a-web-for-everyone/">A Web for Everyone</a></li>
        <li><a href="https://abookapart.com/products/just-enough-research">Just Enough Research</a></li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage


