import React from "react"

const LiveRegion = ({ message, level = 'polite'}) => {
    return (
        <div aria-live={level} role="log" className="visually-hidden">
            {message ? message : ''}
        </div>
    )
}
export default LiveRegion
