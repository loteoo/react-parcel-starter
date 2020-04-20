import { createContext, useReducer } from 'react'
import * as actions from './actions'
import init from './init'

// Create context with Initial values (enhances autocompletion)
const GlobalContext = createContext({
  state: init,

  /**
   * Enhances the dispatcher to Type-Safe™ one
   * @type {import('./Dispatcher').default}
   */
  dispatch: () => {}
})

const reducer = (state, [action, payload]) => actions[action](state, payload)

/** Provider component */
export const GlobalProvider = ({ children }) => {
  const [state, realDispatcher] = useReducer(reducer, init)
  // @ts-ignore
  // Allow more than 1 param in the dispatch function, pass it as an array to the reducer
  const dispatch = (...args) => realDispatcher(args)
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
