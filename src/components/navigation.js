import React from "react"
import { Link } from "gatsby"
import { Heading } from "grommet"

import navStyles from "./navigation.module.scss"

const Navigation = () => (
    <div className={`nav ${navStyles.nav}`}>
        <Heading
            className={`navHeading ${navStyles.navHeading}`}
            level="2"
            size="small"
            margin="none"
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
                    Other things
                </Heading>
                <ul>
                    <li><Link to="/page-2">Page 2</Link></li>
                </ul>
            </li>
        </ul>
    </div>
)

export default Navigation
