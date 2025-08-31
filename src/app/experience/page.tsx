// import AwsDark from '../../../public/icons/aws'
import LineEnd from '../../../public/icons/DoubleArrowRight'
// import Javascript from '../../../public/icons/javascript'
// import Nodejs from '../../../public/icons/nodejs'
// import Postgresql from '../../../public/icons/postgresql'
import React from '../../../public/icons/react'
// import Redux from '../../../public/icons/redux'
// import Sass from '../../../public/icons/sass'
// import Typescript from '../../../public/icons/typescript'
import Layout from '../components/Layout'
import styles from './page.module.scss'

type HeaderProps = {
  title?: string
  showBackButton?: boolean
}

const Experience = ({}: HeaderProps) => {
  return (
    <Layout>
      <div className={styles.Timeline}>
        <div className={styles.TimelineItem}>
          <div className={styles.TimelineMarker}></div>
          <div className={styles.TimelineContent}>
            <div className={styles.TimelineDate}>Mikata Health</div>
            <div className={styles.TimelineDescription}>
              {/* <Location /> */}
              &nbsp; Calgary, Alberta
            </div>
            <div className={styles.TimelineDescription}>
              {/* <Timeline /> */}
              &nbsp; Jan 2022 &nbsp;
              <LineEnd /> &nbsp;Present
            </div>
            <div className={styles.Card}>
              <h4>Fullstack Developer</h4>
              <p>
                - Core member of the software team working as Fullstack
                developer on a suite of modern apps for healthcare.
              </p>
              <p>
                - Able to build features involving both Frontend and Backend
                changes.
              </p>
              <p>
                - Strong understanding of React, Redux and SASS to build modern
                UI
              </p>
              <p>
                - Well versed in writing backend APIs using AWS Lambdas with
                nodejs and knexjs for PostgreSQL.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.TimelineItem}>
          <div className={styles.TimelineMarker}></div>
          <div className={styles.TimelineContent}>
            <div className={styles.TimelineDate}>Evertz Microsystems</div>
            <div className={styles.TimelineDescription}>
              {/* <Location /> */}
              &nbsp; Burlington, Ontario
            </div>
            <div className={styles.TimelineDescription}>
              {/* <Timeline /> */}
              &nbsp; Feb 2019 &nbsp; <LineEnd /> &nbsp;Aug 2021
            </div>

            <div className={styles.Card}>
              <h4>Applications Engineer</h4>
              <p>
                - Product specialist for an Elastic stack based data analytics
                product.
              </p>
              <p>
                - Experienced with building Kibana & Grafana dashboards to
                monitor stats.
              </p>
              <p>
                - Providing product training and practical demos to internal
                teams
              </p>
              <p>- Provided on-site product training to existing customers</p>
              <p>
                - Built a fullstack web-based form to collect and maintain
                Project specific information.
              </p>
              <p>
                - Web-based form was built using Angular, Nodejs, Expressjs &
                MongoDB.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.TimelineItem}>
          <div className={styles.TimelineMarker}></div>
          <div className={styles.TimelineContent}>
            <div className={styles.TimelineDate}>Tata Consultancy Services</div>
            <div className={styles.TimelineDescription}>
              {/* <Location /> */}
              &nbsp; Toronto, Ontario
            </div>
            <div className={styles.TimelineDescription}>
              {/* <Timeline /> */}
              &nbsp; Jun 2017 &nbsp;
              <LineEnd /> &nbsp; Feb 2019
            </div>
            <div className={styles.Card}>
              <h4>Software Developer</h4>
              <p>
                - Worked on Web and Mobile application as part of the R&D Agile
                Lab team.
              </p>
              <p>
                - Constant collaboration with other members of the Agile Lab
                Team
              </p>
              <p>
                - Conducted REST API testing using Postman to add and
                authenticate user credentials
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Experience
