import styles from './index.module.scss'

type HeaderProps = {
  title?: string
  description?: string
  showBackButton?: boolean
}

const Card = ({ title, description }: HeaderProps) => {
  console.log('🚀 ~ Header ~ Card:', title)
  return (
    <div className={styles.Card}>
      <div className={styles.CardContent}>
        <h2 className={styles.CardTitle}>{title}</h2>
        <p className={styles.CardDescription}>{description}</p>
      </div>
    </div>
  )
}

export default Card
