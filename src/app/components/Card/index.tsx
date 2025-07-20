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
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card
