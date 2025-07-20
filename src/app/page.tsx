import Card from './components/Card'
import Layout from './components/Layout'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.page}>
      <Layout>
        <h1>&nbsp; Hello,</h1>
        <h2>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i enjoy working on fullstack web and
          mobile apps.
        </h2>
        <div className={styles.gridContainer}>
          <div className={styles.cardGrid}>
            <Card
              title={'Yukold'}
              description={
                'Mobile app that provides weather forecast by searching for a city'
              }
            />
            <Card
              title={'Jotdown'}
              description='Mobile app that allows users to create notes'
            />
            {/* <Card
            title={'Mailman'}
            description='Simple web app that allows users to make API calls much like a popular app out there'
          /> */}
          </div>
        </div>
      </Layout>
    </div>
  )
}
