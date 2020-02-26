import { createContext, useState } from 'react'

/**
 * Initial global state
 */
const init = {
  count: 0
}

/**
 * Global context with default values
 * for IDE autocompletion
 */
const GlobalContext = createContext({
  state: init,
  actions: {
    decrement: null,
    increment: null
  }
})

/** Provider component */
export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState(init)

  const actions = {
    decrement: () => {
      setState({
        ...state,
        count: state.count - 1
      })
    },
    increment: () => {
      setState({
        ...state,
        count: state.count + 1
      })
    }
  }

  return (
    <GlobalContext.Provider value={{ state, actions }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
