import { Link } from 'react-router-dom'
import styles from './header.css'
import utils from '/styles/utils.css'

const Logo = () => (
  <Link className={styles.logo} to="/">
    Home
  </Link>
)

const Navigation = () => (
  <nav className={styles.navigation}>
    <Link to="/second-page">Second page</Link>
  </nav>
)

export default () => (
  <header className={styles.container}>
    <div className={`${utils.container} ${styles.inner}`}>
      <Logo />
      <Navigation />
    </div>
  </header>
)
