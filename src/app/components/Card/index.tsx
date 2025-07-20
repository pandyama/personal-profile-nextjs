import styles from './index.module.scss'

type HeaderProps = {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

const Card = ({ title, description, buttonText, buttonLink }: HeaderProps) => {
  console.log('🚀 ~ Header ~ Card:', title)
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button className={styles.button}>
        <a href={buttonLink} target='_blank' rel='noopener noreferrer'>
          {buttonText}
        </a>
      </button>
      {/* <Button variant={'outline'}> Test</Button> */}
    </div>
  )
}

export default Card
