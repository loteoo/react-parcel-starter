/**
 * Create object of input values from a form element
 * @param {HTMLFormElement} formElement
 */
export const getFormData = formElement => {
  const data = {}
  new FormData(formElement).forEach((value, key) => {
    data[key] = value
  })
  return data
}
