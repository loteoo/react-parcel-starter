import GlobalContext from '/components/GlobalContext'
import { useContext, useState } from 'react'

import utils from '/styles/utils.css'

const Counter = ({ title, count, decrement, increment }) => (
  <div className={`${utils.card} ${utils.alignCenter}`}>
    <h6>{title}</h6>
    <h2>{count}</h2>
    <div className={utils.row}>
      <button type="button" onClick={decrement}>
        -
      </button>
      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  </div>
)

export default () => {
  const { state, actions } = useContext(GlobalContext)
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  return (
    <>
      <h1>Hello from second page</h1>
      <div className={utils.grid}>
        <Counter
          title="component state"
          count={count}
          increment={increment}
          decrement={decrement}
        />
        <Counter
          title="global state"
          count={state.count}
          increment={actions.increment}
          decrement={actions.decrement}
        />
      </div>
    </>
  )
}
