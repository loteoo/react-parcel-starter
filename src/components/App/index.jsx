import { BrowserRouter, Switch } from 'react-router-dom'
import { GlobalProvider } from '/components/GlobalContext'
import Header from '/components/Header'
import Router from '/components/Router'
import Footer from '/components/Footer'

// Global styling
import '/styles/base.css'

// Utility classes
import utils from '/styles/utils.css'

// Component classes
import styles from './app.css'

// Root component
export default () => (
  <GlobalProvider>
    <BrowserRouter>
      <Switch>
        <div className={styles.appContainer}>
          <Header />
          <main className={utils.container}>
            <Router />
          </main>
          <Footer />
        </div>
      </Switch>
    </BrowserRouter>
  </GlobalProvider>
)
