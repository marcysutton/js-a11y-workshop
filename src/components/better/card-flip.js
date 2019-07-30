import React, {useRef, useEffect, useState} from "react"

import "./card-flip.scss"

function CardFlip (props) {
    let toggleButtonRef = useRef(null)
    let closeButtonRef = useRef(null)
    let overlayRef = useRef(null)

    const [ isActive, setIsActive ] = useState(false)
    const [transitionStatus, changeTransitionStatus] = useState(0)
    
    useEffect(() => {
      const handler = (event) => {
        // you can listen for any animatable CSS property here!
        // Note: opacity alone is not enough to properly disable hidden content still in the DOM.
        if (event.propertyName === "opacity" && closeButtonRef.current !== null) {
          closeButtonRef.current.focus()
        }
      }
      window.addEventListener("transitionend", handler)
    }, [])
    const handleClick = (event) => {
        setIsActive(!isActive)
    }
    const closeOverlay = () => {
        setIsActive(false)
        toggleButtonRef.current.focus()
    }

    const activeClass = isActive ? "active" : ""
    // todo: reimplement focus trap
    const overlay = isActive
        ? <div>
            <div>
            <div className="gradient-overlay"></div>
            <button
                className="team-close-button"
                aria-label={`Close ${props.memberName}`}
                onClick={closeOverlay}
                ref={closeButtonRef}>X</button>
            <h5 className="team-name">{props.memberName}</h5>
            <span className="team-subtitle">{props.subtitle}</span>
            <p>{props.bio}</p>
            <div className="team-socials">
                <a href={props.twitterLink} target=" _blank" title="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.98 404.98"><path d="M340.73 115.23a112.014 112.014 0 0 1-32.21 8.83c11.58-6.94 20.47-17.93 24.66-31.03a112.12 112.12 0 0 1-35.62 13.61c-10.23-10.9-24.81-17.71-40.94-17.71-30.98 0-56.09 25.11-56.09 56.09 0 4.4.5 8.68 1.45 12.78-46.62-2.34-87.94-24.67-115.61-58.6-4.83 8.28-7.59 17.92-7.59 28.2 0 19.46 9.9 36.63 24.95 46.69a55.803 55.803 0 0 1-25.41-7.02v.71c0 27.18 19.33 49.85 44.99 55a56.259 56.259 0 0 1-14.78 1.97c-3.61 0-7.13-.35-10.55-1.01 7.14 22.28 27.85 38.5 52.4 38.95-19.2 15.04-43.38 24.01-69.66 24.01-4.53 0-8.99-.27-13.38-.78 24.82 15.91 54.3 25.2 85.98 25.2 103.17 0 159.58-85.47 159.58-159.59 0-2.43-.05-4.85-.16-7.26a113.994 113.994 0 0 0 27.99-29.04z" fill="#fff"/></svg>
                </a>
            </div>
        </div>
        </div>
    : false
    return (
        <div className="team-member">
            <div className={`team-content ${activeClass}`}>
                <button className="toggle-button"
                    onClick={handleClick}
                    ref={toggleButtonRef}
                >
                    <span className="team-image">
                        <img src={props.image} alt="" />
                    </span>
                    <span className="team-name">{props.memberName}</span>
                    <span className="team-subtitle">{props.subtitle}</span>
                </button>

                <div role="dialog"
                    className="team-content-overlay"
                  ref={overlayRef}
                >
                    {overlay}
                </div>
            </div>
        </div>
    )
}

export default CardFlip