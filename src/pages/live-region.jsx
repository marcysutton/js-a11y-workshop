import React, {useState} from "react"

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

import LiveRegion from "../components/good/live-region"
import {DebounceInput} from 'react-debounce-input'

const Textarea = ({handleUpdateFunc}) => (
  <DebounceInput
    minLength={2}
    debounceTimeout={300}
    forceNotifyByEnter={false}
    element="textarea"
    onChange={event => handleUpdateFunc(event.target.value)} />
)

const LiveRegionDemoPage = () => {
  const [message, setMessage] = useState(null)
  const [updating, setUpdating] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  const handleTextChange = (value) => {
    console.log(value)
    // setMessage(value)
    setUpdating(true)
    // setMessage('saved!')

  }
  const dismissToast = () => {
    setUpdating(false)
  }
  return (
    <Layout>
      <SEO title="Live Regions" keywords={['javascript', 'accessibility', 'react']} />
      <div>
        <h2>Live Region Demo</h2>
        <form onSubmit={handleSubmit}>   
          <label>
            Enter text here<br />
            <Textarea handleUpdateFunc={handleTextChange} />
          </label>
          <div className="updateUI">
            <div className={`toast ${updating ? 'updating' : null}`}>
              <span>Form saved</span>
              <button
                onClick={dismissToast}
                className="dismiss"
                type="button"
              >
                X
              </button>
            </div>
            <LiveRegion level="polite" message={message} />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default LiveRegionDemoPage


