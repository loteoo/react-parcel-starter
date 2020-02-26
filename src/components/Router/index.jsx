import { Route } from 'react-router-dom'

import Home from '/pages/Home'
import SecondPage from '/pages/SecondPage'

export default () => (
  <>
    <Route component={Home} path="/" exact />
    <Route component={SecondPage} path="/second-page" exact />
  </>
)
