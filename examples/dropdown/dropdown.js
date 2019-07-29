import React, { useState, useRef, useEffect } from "react"
import uuid from "uuid"

import "./dropdown.scss"

const Dropdown = ({ activatorText = 'Dropdown', items = [] }) => {
    const [isOpen, setIsOpen] = useState(false)
    const activatorRef = useRef(null)
    const dropdownListRef = useRef(null)

    const wrapKeyHandler = (event) => {
        if (event.keyCode === 27 && isOpen) {
            // escape key
            setIsOpen(false)
            activatorRef.current.focus()
        }
    }
    const clickHandler = () => {
        setIsOpen(!isOpen)
    }
    const clickOutsideHandler = (event) => {
        if (dropdownListRef.current.contains(event.target) || activatorRef.current.contains(event.target)) {
            return
        }
        setIsOpen()
    }
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', clickOutsideHandler)

            dropdownListRef.current.querySelector('a').focus()
        } else {
            document.removeEventListener('mousedown', clickOutsideHandler)
        }

        return () => {
            document.removeEventListener('mousedown', clickOutsideHandler)
        }
    }, [isOpen])
    return (
        <div
            className="dropdown-wrap"
            onKeyDown={wrapKeyHandler}
        >
            <button
                aria-haspopup="true"
                aria-controls="dropdown1"
                onClick={clickHandler}
                className="dropdown-activator"
                ref={activatorRef}
            >
                {activatorText}
            </button>
            <ul
                id="dropdown1"
                ref={dropdownListRef}
                tabIndex="-1"
                className={`dropdown-itemList ${isOpen ? 'active' : ''}`}>
                { items.map((item, index) => {
                    return <li key={index}>
                        <a href={item.url}>item.text</a>
                    </li>
                })}
                { items.length === 0 ? <li>No items</li> : null }
            </ul>
        </div>
    )
}
export default Dropdown
