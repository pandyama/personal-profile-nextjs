// import Link from 'next/link'
import React from '../../../public/icons/react'
import styles from './page.module.scss'
import Page from '@/app/components/Page'
import Card from '../components/Card'

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
      <Page />
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
    </div>
  )
}

export default Projects
