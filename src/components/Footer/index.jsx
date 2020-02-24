import Github from '/assets/github.svg'
import styles from './style.css'

export default () => (
  <footer className={styles.footer}>
    <a
      title="Github"
      aria-label="Github"
      href="https://github.com/loteoo/react-parcel-starter"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github />
    </a>
  </footer>
)
