import React, {useState, useRef} from "react"

const LiveRegion = () => {
  const [message, setMessage] = useState('')
  const inputRef = useRef(null)

  const start = () => {
    let typedMessage = inputRef.current.value
    if (typedMessage.trim().length) {
      setMessage(typedMessage)
    }
  }
  const submitHandler = (event) => {
    event.preventDefault()
    start()
  }
  return (
    <form onSubmit={submitHandler}>
      <div aria-live="assertive" role="log" id="region">
          <p>{ message ? message : 'nothing yet.' }</p>
      </div>
      <label>
        Type some text<br />
        <input type="text" ref={inputRef} />
      </label>
      <div>
        <button type="submit" onClick={start}>Start</button>
      </div>
    </form>
  )
}

export default LiveRegion