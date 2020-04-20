import { Route, Switch } from 'react-router-dom'

import Home from '/pages/Home'
import SecondPage from '/pages/SecondPage'

export default () => (
  <Switch>
    <Route component={Home} path="/" exact />
    <Route component={SecondPage} path="/second-page" exact />
  </Switch>
)
