import React, { useRef, useState, useEffect } from "react"
import styled from "@emotion/styled"

const Demo = styled.div`
.animationToggle {
    background-color: black;
    border: none;
    border-radius: 0;
    color: white;
    font-size: 1rem;
    padding: 0.5em 1em;
  }
 .animationTarget {
    height: 100%;
    margin: 1em auto;
    min-width: 400px;
    min-height: 400px;
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .pulse {
      z-index: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 30rem;
      
      circle {
        fill: #ff5154;
        transform: scale(0);
        opacity: 0.4;
        transform-origin: 50% 50%;
        animation: pulse 2.5s cubic-bezier(.5,.5,0,1) infinite;
        
        &:nth-child(2) {
            fill: #7fc6a4;
            animation: pulse 2.5s 0.75s cubic-bezier(.5,.5,0,1) infinite;
        }
        
        &:nth-child(3) {
            fill: #e5f77d;
            animation: pulse 2.5s 1.5s cubic-bezier(.5,.5,0,1) infinite;
        }
          
      }
      
  }
  
  @keyframes pulse {
      25% {
          opacity: 0.4;
      }
      
      100% {
          transform: scale(1);
      opacity: 0;
      }	
  }
`

const InaccessibleAnimationDemo = () => {
    return (
        <Demo>
            <div
                className="animationTarget"
                id="animation-target"
            >
                <svg className="pulse" viewBox="0 0 1024 1024">
                    <circle cx="512" cy="512" r="512"></circle>
                    <circle cx="512" cy="512" r="512"></circle>
                    <circle cx="512" cy="512" r="512"></circle>
                </svg>
            </div>
        </Demo>
    )
}

export default InaccessibleAnimationDemo
