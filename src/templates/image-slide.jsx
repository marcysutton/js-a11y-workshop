import React from "react"

const ImageSlide = ({ heading, imageSrc, imageAlt }) => (
    <>
        <span className="visually-hidden">{heading}</span>

        <img
            src={imageSrc}
            alt={imageAlt}
            style={{
                height: `100%`,
                verticalAlign: `bottom`,
                width: `100%`,
            }}
        />
    </>
)

export default ImageSlide
