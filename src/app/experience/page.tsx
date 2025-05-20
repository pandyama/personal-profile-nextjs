// import Link from 'next/link'
import AwsDark from '../../../public/icons/aws'
import LineEnd from '../../../public/icons/DoubleArrowRight'
import Javascript from '../../../public/icons/javascript'
import Location from '../../../public/icons/location'
import Nodejs from '../../../public/icons/nodejs'
import Postgresql from '../../../public/icons/postgresql'
import React from '../../../public/icons/react'
import Redux from '../../../public/icons/redux'
import Sass from '../../../public/icons/sass'
import Timeline from '../../../public/icons/timeline'
import Typescript from '../../../public/icons/typescript'
import styles from './page.module.scss'
import Page from '@/app/components/Page'

type HeaderProps = {
  title?: string
  showBackButton?: boolean
}

const Experience = ({ title }: HeaderProps) => {
  console.log('🚀 ~ Header ~ title:', title)
  return (
    <div>
      <Page />
      <div className={styles.Timeline}>
        <div className={styles.TimelineItem}>
          <div className={styles.TimelineMarker}></div>
          <div className={styles.TimelineContent}>
            <div className={styles.TimelineDate}>MIKATA HEALTH</div>
            <div className={styles.TimelineDescription}>
              <Location />
              &nbsp; CALGARY, ALBERTA
            </div>
            <div className={styles.TimelineDescription}>
              <Timeline />
              &nbsp; Jan 2022 &nbsp;
              <LineEnd /> &nbsp;Present
            </div>
            <div className={styles.Card}>
              <h4>Fullstack Developer</h4>
              <p>- coding</p>

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
            <div className={styles.TimelineDate}>EVERTZ MICROSYSTEMS</div>
            <div className={styles.TimelineDescription}>
              <Location />
              &nbsp; BURLINGTON, ONTARIO
            </div>
            <div className={styles.TimelineDescription}>
              <Timeline />
              &nbsp; Feb 2019 &nbsp; <LineEnd /> &nbsp;Aug 2021
            </div>

            <div className={styles.Card}>
              <h4>Applications Engineer</h4>
              <p>- coding</p>
              <b>Javascript</b>
            </div>
          </div>
        </div>

        <div className={styles.TimelineItem}>
          <div className={styles.TimelineMarker}></div>
          <div className={styles.TimelineContent}>
            <div className={styles.TimelineDate}>TATA CONSULTANCY SERVICES</div>
            <div className={styles.TimelineDescription}>
              <Location />
              &nbsp; TORONTO, ONTARIO
            </div>
            <div className={styles.TimelineDescription}>
              <Timeline />
              &nbsp; Jun 2017 &nbsp;
              <LineEnd /> &nbsp; Feb 2019
            </div>
            <div className={styles.Card}>
              <h4>Software Developer</h4>
              <p>- coding</p>
              <b>Javascript</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
