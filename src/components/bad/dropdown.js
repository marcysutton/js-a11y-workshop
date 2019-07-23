import React, { useState, useRef, useEffect } from "react"
import uuid from "uuid"

import dropdownStyles from "./dropdown.module.scss"

const Dropdown = ({ activatorText, items = [] }) => {
    const [activated, setActivated] = useState(false)
    const activatorRef = useRef()
    const listRef = useRef()

    const handleClick = () => {
        setActivated(!activated)
    }
    const handleClickOutside = (event) => {
        if (listRef.current.contains(event.target) || activatorRef.current.contains(event.target)) {
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
            className={dropdownStyles.wrap}
        >
            <span
                ref={activatorRef}
                className={dropdownStyles.activator}
                onClick={handleClick}
            >
                { activatorText + '' }
            </span>
            <div
                ref={listRef}
                id={`list${uuid.v4()}`}
                className={
                    `itemList ${dropdownStyles.itemList} ` +
                    (activated ? dropdownStyles.activated : null)
                }
            >
                {items.map((item, index) => {
                    return <div key={index}>
                        <a href={item.url}>item.text</a>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Dropdown
