// import Link from 'next/link'
import React from '../../../public/icons/react'
import styles from './page.module.scss'
import Card from '../components/Card'
import Header from '../components/Header'
import Footer from '../components/Footer'

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

const Projects = ({ title }: HeaderProps) => {
  console.log('🚀 ~ Projects', title)
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  )
}

export default Projects
