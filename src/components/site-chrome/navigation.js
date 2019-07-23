import React from "react"
import { Link } from "gatsby"
import { Heading } from "grommet"

import navStyles from "./navigation.module.scss"

const Navigation = () => (
    <div className={`nav ${navStyles.nav}`}>
        <Heading
            className="visually-hidden"
            level="2"
        >
            Navigation
        </Heading>
        <ul>
            <li><Link to="/">App Home</Link></li>
            <li><Link to="/slides">Slide deck</Link></li>
            <li className={`navItemGroup ${navStyles.navItemGroup} `}>
                <Heading
                    className={`navHeading ${navStyles.navHeading}`}
                    level="3"
                    size="small"
                    margin="none"
                >
                    Components
                </Heading>
                <ul>
                    <li><Link to="/dropdown">Dropdown</Link></li>
                    <li>Modal</li>
                    <li><Link to="/semantics">Grid Layout</Link></li>
                    <li>Carousel</li>
                </ul>
            </li>
            <li className={`navItemGroup ${navStyles.navItemGroup} `}>
                <Heading
                    className={`navHeading ${navStyles.navHeading}`}
                    level="3"
                    size="small"
                    margin="none"
                >
                    Concepts
                </Heading>
                <ul>
                    <li>Focus management</li>
                    <li>Announcements</li>
                    <li>Semantic HTML</li>
                    <li>Unobtrusive animation</li>
                    <li>Progressive enhancement</li>
                </ul>
            </li>
        </ul>
    </div>
)

export default Navigation
