import Layout from './components/Layout'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <Layout>
        <h1> &nbsp; Hello, I am a Fullstack Developer</h1>
      </Layout>
    </div>
  )
}
