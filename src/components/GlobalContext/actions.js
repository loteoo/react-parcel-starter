export const decrement = state => ({
  ...state,
  count: state.count - 1
})

export const increment = state => ({
  ...state,
  count: state.count + 1
})

/**
 * @param {number} by
 */
export const incrementBy = (state, by) => ({
  ...state,
  count: state.count + by
})
