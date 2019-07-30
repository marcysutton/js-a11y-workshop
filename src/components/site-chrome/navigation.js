import React from "react"
import { Link } from "gatsby"

import navStyles from "./navigation.module.scss"

const Navigation = () => (
    <nav className={`nav ${navStyles.nav}`}>
        <h2 className="visually-hidden">
            Navigation
        </h2>
        <ul id="navigation" tabIndex="-1">
            <li><Link to="/">App Home</Link></li>
            <li><Link to="/slides">Slide deck</Link></li>
            <li className={`navItemGroup ${navStyles.navItemGroup} `}>
                <h3 className={`navHeading ${navStyles.navHeading}`}>
                    Demos
                </h3>
                <ul id="page-navigation">
                    <li><Link to="/dropdown">Dropdown</Link></li>
                    <li><Link to="/announcer">Announcer</Link></li>
                    <li><Link to="/layout">Layout</Link></li>
                    <li><Link to="/animation">Animation</Link></li>
                    <li><Link to="/enhanced-tablist">Enhanced Tablist</Link></li>
                </ul>
            </li>
            <li className={`navItemGroup ${navStyles.navItemGroup} `}>
                <h3 className={`navHeading ${navStyles.navHeading}`}>
                    Concepts
                </h3>
                <ul>
                    <li>Focus management</li>
                    <li>Announcements</li>
                    <li>Semantic HTML</li>
                    <li>Unobtrusive motion</li>
                    <li>Progressive enhancement</li>
                </ul>
            </li>
        </ul>
    </nav>
)

export default Navigation
