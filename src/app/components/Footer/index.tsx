// import Link from 'next/link'
import styles from './index.module.scss'

type FooterProps = {
  showBackButton?: boolean
}

const Footer = ({}: FooterProps) => {
  return (
    <div className={styles.headerContent}>
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          Thanks for visiting my profile
          {/* <Link href='/'>Home</Link>
          <Link href='/experience'>Experience</Link>
          <Link href='/projects'>Projects</Link> */}
          {/* <Link href='/experience'>Projects</Link> */}
        </nav>
      </div>
    </div>
  )
}

export default Footer
