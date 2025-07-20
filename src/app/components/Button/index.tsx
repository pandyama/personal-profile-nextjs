import * as styles from './index.module.scss'

type PropTypes = {
  variant: 'primary' | 'outline'
  children: React.ReactNode
  danger?: string
}

const Button = ({ variant = 'primary', children }: PropTypes) => {
  return (
    <>
      <button className={styles[variant]}>{children}</button>
    </>
  )
}

export default Button
