import React, {useState} from "react"
import {DebounceInput} from 'react-debounce-input'

const InaccessibleAsyncFormDemo = () => {
  const [updating, setUpdating] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  const handleTextChange = (value) => {
    setUpdating(true)

    setTimeout(() => {
            setUpdating(false)
        }, 3000
    )
  }
  return (
    <form onSubmit={handleSubmit}>   
      <div>
        Enter text here<br />
        <Textarea handleUpdateFunc={handleTextChange} />
      </div>
      <div className="updateUI">
        <div className={`toast ${updating ? 'updating' : null}`}>
          <span>Form saved</span>
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

export default InaccessibleAsyncFormDemo