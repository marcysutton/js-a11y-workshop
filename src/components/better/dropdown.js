import React, { useState, useRef, useEffect } from "react"
import uuid from "uuid"

import "./dropdown.scss"

const Dropdown = ({ activatorText = 'Dropdown', items = [] }) => {
    const activatorRef = useRef(null)
    const dropdownListRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    const clickHandler = (event) => {
        setIsOpen(!isOpen)
    }
    const keyHandler = (event) => {
        console.log(event.key)
        if (event.key === 'Escape' && isOpen) {
            setIsOpen(false)
        }
    }
    const clickOutsideHandler = (event) => {
        if (dropdownListRef.current.contains(event.target) || activatorRef.current.contains(event.target)) {
            return
        }
        setIsOpen(false)
    }
    useEffect(() => {
        if (isOpen) {
            if (dropdownListRef) {
                dropdownListRef.current.querySelector('a').focus()
            }

            document.addEventListener('mouseup', clickOutsideHandler)
        } else {
            document.removeEventListener('mouseup', clickOutsideHandler)
        }
    }, [isOpen])
    return (
        <div
            className="dropdown-wrap"
            onKeyUp={keyHandler}
        >
            <button
                aria-haspopup="true"
                aria-controls="dropdown1"
                data-testid="dropdown-activator"
                onClick={clickHandler}
                ref={activatorRef}
                className="dropdown-activator"
            >
                {activatorText}
            </button>
            <ul
                id="dropdown1"
                ref={dropdownListRef}
                className={`dropdown-itemList ${isOpen ? 'active' : ''}`}
                role="list"
                data-testid="dropdown-itemList"
            >
                {items.map((item, index) => {
                    return <li key={index} role="listitem">
                        <a href={item.url}>{item.text}</a>
                    </li>
                })}
            </ul>
        </div>
    )
}
export default Dropdown
