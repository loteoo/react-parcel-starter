import Github from '/assets/github.svg'
import utils from '/styles/utils.css'
import styles from './style.css'

export default () => (
  <footer className={styles.container}>
    <div className={`${utils.container} ${styles.inner}`}>
      <a
        title="Github"
        aria-label="Github"
        href="https://github.com/loteoo/react-parcel-starter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </a>
    </div>
  </footer>
)
