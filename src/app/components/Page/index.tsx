import Header from '../Header'
import './index.module.scss'

type HeaderProps = {
  title?: string
  showBackButton?: boolean
}

const Page = ({ title }: HeaderProps) => {
  console.log('🚀 ~ Header ~ title:', title)
  return (
    <div>
      <Header />
    </div>
  )
}

export default Page
