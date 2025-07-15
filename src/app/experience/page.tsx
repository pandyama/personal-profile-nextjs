// import Link from 'next/link'
import AwsDark from '../../../public/icons/aws'
import LineEnd from '../../../public/icons/DoubleArrowRight'
import Javascript from '../../../public/icons/javascript'
// import Location from '../../../public/icons/location'
import Nodejs from '../../../public/icons/nodejs'
import Postgresql from '../../../public/icons/postgresql'
import React from '../../../public/icons/react'
import Redux from '../../../public/icons/redux'
import Sass from '../../../public/icons/sass'
// import Timeline from '../../../public/icons/timeline'
import Typescript from '../../../public/icons/typescript'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from './page.module.scss'

type HeaderProps = {
  title?: string
  showBackButton?: boolean
}

const Experience = ({ title }: HeaderProps) => {
  console.log('🚀 ~ Header ~ title:', title)
  return (
    <div className={styles.Container}>
      <Header />
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
              <ul className={styles.ExperienceList}>
                <li className={styles.ExperienceItem}>
                  <div className={styles.Dot}></div>
                  <p className={styles.description}>
                    Built UI using React, Typescript and SCSS.
                  </p>
                </li>
                <li className={styles.ExperienceItem}>
                  <div className={styles.Dot}></div>
                  <p className={styles.description}>
                    Programmed RESTful APIs using AWS Lambdas with Serverless.
                  </p>
                </li>
                <li className={styles.ExperienceItem}>
                  <div className={styles.Dot}></div>
                  <p className={styles.description}>
                    Resolve production issues using AWS Cloudwatch & PostgreSQL
                    database.
                  </p>
                </li>
                <li className={styles.ExperienceItem}>
                  <div className={styles.Dot}></div>
                  <p className={styles.description}>
                    Help maintain and update the marketing site of the company
                    using Gatsby framework.
                  </p>
                </li>
              </ul>

              <div className={styles.Carousel}>
                <div className={styles.Slider}>
                  <div className={styles.SlideItem}>
                    <AwsDark />
                  </div>
                  <div className={styles.SlideItem}>
                    <Postgresql />
                  </div>
                  <div className={styles.SlideItem}>
                    <Javascript />
                  </div>
                  <div className={styles.SlideItem}>
                    <Typescript />
                  </div>
                </div>
                <div aria-hidden className={styles.Slider}>
                  <div className={styles.SlideItem}>
                    <AwsDark />
                  </div>
                  <div className={styles.SlideItem}>
                    <Postgresql />
                  </div>
                  <div className={styles.SlideItem}>
                    <Javascript />
                  </div>
                  <div className={styles.SlideItem}>
                    <Typescript />
                  </div>
                </div>
              </div>
              <div className={styles.Carousel}>
                <div className={styles.SliderReverse}>
                  <div className={styles.SlideItem}>
                    <Nodejs />
                  </div>
                  <div className={styles.SlideItem}>
                    <React />
                  </div>
                  <div className={styles.SlideItem}>
                    <Redux />
                  </div>
                  <div className={styles.SlideItem}>
                    <Sass />
                  </div>
                </div>
                <div aria-hidden className={styles.SliderReverse}>
                  <div className={styles.SlideItem}>
                    <Nodejs />
                  </div>
                  <div className={styles.SlideItem}>
                    <React />
                  </div>
                  <div className={styles.SlideItem}>
                    <Redux />
                  </div>
                  <div className={styles.SlideItem}>
                    <Sass />
                  </div>
                </div>
              </div>
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
              <ul className={styles.ExperienceList}>
                <li className={styles.ExperienceItem}>
                  <div className={styles.Dot}></div>
                  <p className={styles.description}>
                    Product specialist for an Elastic stack based data analytics
                    product.
                  </p>
                </li>
                <li className={styles.ExperienceItem}>
                  <div className={styles.Dot}></div>
                  <p className={styles.description}>
                    Experienced with building Kibana & Grafana dashboards to
                    monitor stats.
                  </p>
                </li>
                <li className={styles.ExperienceItem}>
                  <div className={styles.Dot}></div>
                  <p className={styles.description}>
                    Providing product training and practical demos to internal
                    teams
                  </p>
                </li>
                <li className={styles.ExperienceItem}>
                  <div className={styles.Dot}></div>
                  <p className={styles.description}>
                    Provided on-site product training to existing customers
                  </p>
                </li>
                <li className={styles.ExperienceItem}>
                  <div className={styles.Dot}></div>
                  <p className={styles.description}>
                    Built a fullstack web-based form to collect and maintain
                    Project specific information.
                  </p>
                </li>
                <li className={styles.ExperienceItem}>
                  <div className={styles.Dot}></div>
                  <p className={styles.description}>
                    Web-based form was built using Angular, Nodejs, Expressjs &
                    MongoDB.
                  </p>
                </li>
              </ul>
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
              <ul className={styles.ExperienceList}>
                <li className={styles.ExperienceItem}>
                  <div className={styles.Dot}></div>
                  <p className={styles.description}>
                    Worked on Web and Mobile application as part of the R&D
                    Agile Lab team.
                  </p>
                </li>
                <li className={styles.ExperienceItem}>
                  <div className={styles.Dot}></div>
                  <p className={styles.description}>
                    Participated in daily standups and sprint planning meetings
                  </p>
                </li>
                <li className={styles.ExperienceItem}>
                  <div className={styles.Dot}></div>
                  <p className={styles.description}>
                    Providing product training and practical demos to internal
                    teams
                  </p>
                </li>
                <li className={styles.ExperienceItem}>
                  <div className={styles.Dot}></div>
                  <p className={styles.description}>
                    Provided on-site product training to existing customers
                  </p>
                </li>
                <li className={styles.ExperienceItem}>
                  <div className={styles.Dot}></div>
                  <p className={styles.description}>
                    Built a fullstack web-based form to collect and maintain
                    Project specific information.
                  </p>
                </li>
                <li className={styles.ExperienceItem}>
                  <div className={styles.Dot}></div>
                  <p className={styles.description}>
                    Web-based form was built using Angular, Nodejs, Expressjs &
                    MongoDB.
                  </p>
                </li>
                <li className={styles.ExperienceItem}>
                  <div className={styles.Dot}></div>
                  <p className={styles.description}>
                    Responsible for server side and back end integration for a
                    web Intake Form.
                  </p>
                </li>
                <li className={styles.ExperienceItem}>
                  <div className={styles.Dot}></div>
                  <p className={styles.description}>
                    Conducted REST API testing using Postman to add and
                    authenticate user credentials
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Experience
