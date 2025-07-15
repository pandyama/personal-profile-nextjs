import { ReactNode } from 'react'
import Header from '../Header'
import styles from './index.module.scss'
import Footer from '../Footer'

type HeaderProps = {
  children: ReactNode
}

const Layout = ({ children }: HeaderProps) => {
  return (
    <div className={styles.main}>
      <Header />
      <main style={{ padding: '1rem', flex: 1 }}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
