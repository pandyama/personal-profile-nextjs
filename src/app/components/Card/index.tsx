import styles from './index.module.scss'

type HeaderProps = {
  title?: string
  description?: string
  showBackButton?: boolean
}

const Card = ({ title, description }: HeaderProps) => {
  console.log('🚀 ~ Header ~ Card:', title)
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button className={styles.button}>Test</button>
      {/* <Button variant={'outline'}> Test</Button> */}
    </div>
  )
}

export default Card
