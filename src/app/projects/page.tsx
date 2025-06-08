// import Link from 'next/link'
import React from '../../../public/icons/react'
// import styles from './page.module.scss'
import Page from '@/app/components/Page'
import Card from '../components/Card'

type HeaderProps = {
  title?: string
  showBackButton?: boolean
}

const Projects = ({ title }: HeaderProps) => {
  console.log('🚀 ~ Projects', title)
  return (
    <div>
      <Page />
      Projects
      <Card title={'Yukold'} description='Testing' />
    </div>
  )
}

export default Projects
