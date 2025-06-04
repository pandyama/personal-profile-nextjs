import Link from 'next/link'
import styles from './index.module.scss'

type HeaderProps = {
  title?: string
  showBackButton?: boolean
}

const Header = ({ title }: HeaderProps) => {
  console.log('🚀 ~ Header ~ title:', title)
  return (
    <div className={styles.headerContent}>
      <h1>Meet Pandya</h1>

      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <Link href='/'>Home</Link>
          <Link href='/experience'>Experience</Link>
          <Link href='/projects'>Projects</Link>
          {/* <Link href='/experience'>Projects</Link> */}
        </nav>
      </div>
    </div>
  )
}

export default Header
