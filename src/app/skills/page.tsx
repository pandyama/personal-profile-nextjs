import React from '../../../public/icons/react'
import styles from './page.module.scss'
// import Card from '../components/Card'
import Layout from '../components/Layout'
import Typescript from '../../../public/icons/typescript'
import Sass from '../../../public/icons/sass'
import Redux from '../../../public/icons/redux'
import AwsDark from '../../../public/icons/aws'
import Nodejs from '../../../public/icons/nodejs'
import Postgresql from '../../../public/icons/postgresql'
import Javascript from '../../../public/icons/javascript'
import Gatsby from '../../../public/icons/gatsby'
import Jest from '../../../public/icons/jest'
import HTML from '../../../public/icons/html'
import Expo from '../../../public/icons/expo'
// import ReactText from '../../../public/icons/react-text'

type HeaderProps = {
  title?: string
  showBackButton?: boolean
}

const Skills = ({}: HeaderProps) => {
  return (
    <Layout>
      <div className={styles.GridContainer}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2>Frontend</h2>
          <div className={styles.SkillGroup}>
            <div className={styles.SkillRing}>
              {/* <span className={styles.Text}>React</span> */}
              {/* <ReactText /> */}
              <React />
              <p>React</p>
            </div>

            <div className={styles.SkillRing}>
              <Typescript />
              <p>Typescript</p>
            </div>

            <div className={styles.SkillRing}>
              <Sass />
              <p>Sass</p>
            </div>

            <div className={styles.SkillRing}>
              <HTML />
              <p>HTML</p>
            </div>

            <div className={styles.SkillRing}>
              <Redux />
              <p>Redux</p>
            </div>

            <div className={styles.SkillRing}>
              <Gatsby />
              <p>Gatsby</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2>Backend</h2>
          <div className={styles.SkillGroup}>
            <div className={styles.SkillRing}>
              {/* <span className={styles.Text}>React</span> */}
              {/* <ReactText /> */}
              <AwsDark />
              <p>AWS</p>
            </div>

            <div className={styles.SkillRing}>
              <Javascript />
              <p>Javascript</p>
            </div>

            <div className={styles.SkillRing}>
              <Nodejs />
              <p>Nodejs</p>
            </div>

            <div className={styles.SkillRing}>
              <Postgresql />
              <p>PostgreSQL</p>
            </div>

            <div className={styles.SkillRing}>
              <Jest />
              <p>Jest</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2>Mobile</h2>
          <div className={styles.SkillGroup}>
            <div className={styles.SkillRing}>
              {/* <span className={styles.Text}>React</span> */}
              {/* <ReactText /> */}
              <React />
              <p>React Native</p>
            </div>

            <div className={styles.SkillRing}>
              <Expo />
              <p>Expo</p>
            </div>

            <div className={styles.SkillRing}>
              <Javascript />
              <p>Javascript</p>
            </div>

            <div className={styles.SkillRing}>
              <Typescript />
              <p>Typescript</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Skills
