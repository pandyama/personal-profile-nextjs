import React from '../../../public/icons/react'
import styles from './page.module.scss'
import Card from '../components/Card'
import Layout from '../components/Layout'

type HeaderProps = {
  title?: string
  showBackButton?: boolean
}

/**
 * Projects to show
 * - Yukold
 * - Jotdown
 * - Mailmain
 */

const Projects = ({}: HeaderProps) => {
  return (
    <Layout>
      <div className={styles.GridContainer}>
        <div className={styles.CardGrid}>
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
          <Card
            title={'Mailman'}
            description='Simple web app that allows users to make API calls much like a popular app out there'
          />
        </div>
      </div>
    </Layout>
  )
}

export default Projects
