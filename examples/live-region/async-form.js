import React, {useState} from "react"
import {DebounceInput} from 'react-debounce-input'

const AccessibleAsyncForm = () => {
  const [message, setMessage] = useState(null)
  const [updating, setUpdating] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  const handleTextChange = (value) => {
    setUpdating(true)
  }
  const dismissToast = () => {
    setUpdating(false)
  }
  return (
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
            aria-label="dismiss message"
          >
            X
          </button>
        </div>
        <div aria-live="polite" role="log" className="visually-hidden">
            {message ? message : ''}
        </div>
      </div>
    </form>
  )
}

const Textarea = ({handleUpdateFunc}) => (
    <DebounceInput
      minLength={2}
      debounceTimeout={300}
      forceNotifyByEnter={false}
      element="textarea"
      onChange={event => handleUpdateFunc(event.target.value)} />
)

export default AccessibleAsyncForm