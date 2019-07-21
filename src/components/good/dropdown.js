import React, { useState, useRef, useEffect } from "react"
import uuid from "uuid"

import dropdownStyles from "./dropdown.module.scss"

const Dropdown = ({ activatorText = 'Dropdown', items = [] }) => {
    const [activated, setActivated] = useState(false)
    const dropdownRef = useRef()
    const activatorBtnRef = useRef()
    const listRef = useRef()

    const handleEscape = (event) => {
        if (event.keyCode === 27 && activated) {
            setActivated(false)
            activatorBtnRef.current.focus()
        }
    }
    const handleClick = () => {
        setActivated(!activated)
    }
    const handleClickOutside = (event) => {
        if (dropdownRef.current.contains(event.target)) {
            return
        }
        setActivated(false)
    }
    useEffect(() => {
        if (activated) {
          document.addEventListener("mousedown", handleClickOutside)
        } else {
          document.removeEventListener("mousedown", handleClickOutside)
        }
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside)
        }
      }, [activated])
    return (
        <div
            ref={dropdownRef}
            className={dropdownStyles.wrap}
            onKeyDown={handleEscape}
        >
            <button
                className={dropdownStyles.activator}
                aria-haspopup="true"
                aria-controls="list"
                aria-expanded={activated}
                onClick={handleClick}
                ref={activatorBtnRef}
            >
                { activatorText + '' }
            </button>
            <ul
                role="list"
                id={`list${uuid.v4()}`}
                className={
                    `itemList ${dropdownStyles.itemList} ` +
                    (activated ? dropdownStyles.activated : null)
                }
                ref={listRef}
            >
                {items.map((item, index) => {
                    return <li key={index} role="listitem">
                        <a href={item.url}>item.text</a>
                    </li>
                })}
            </ul>
        </div>
    )
}
export default Dropdown
