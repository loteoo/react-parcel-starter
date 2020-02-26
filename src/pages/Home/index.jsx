import { useState } from 'react'

import utils from '/styles/utils.css'

export default () => {
  const [state, setState] = useState({
    a: 1,
    b: 2
  })

  const handleInput = ev => {
    setState({ ...state, [ev.target.name]: parseInt(ev.target.value) })
  }

  return (
    <>
      <h1>
        Parcel + PWAs =&nbsp;
        <span role="img" aria-label="heart">
          💖
        </span>
      </h1>
      <div className={utils.grid}>
        <input type="number" name="a" value={state.a} onChange={handleInput} />
        <input type="number" name="b" value={state.b} onChange={handleInput} />
      </div>
      <h2>
        {state.a} + {state.b} = {state.a + state.b}
      </h2>
      <pre>
        <code>state: {JSON.stringify(state, null, 2)}</code>
      </pre>
    </>
  )
}
