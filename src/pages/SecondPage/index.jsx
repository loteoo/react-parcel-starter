import GlobalContext from '/components/GlobalContext'
import { useContext } from 'react'

import utils from '/styles/utils.css'

export default () => {
  const { state, actions } = useContext(GlobalContext)

  return (
    <>
      <h1>Hello from second page</h1>

      <h2>{state.count}</h2>
      <div className={utils.buttonsRow}>
        <button type="button" onClick={actions.decrement}>
          -
        </button>
        <button type="button" onClick={actions.increment}>
          +
        </button>
      </div>
    </>
  )
}
