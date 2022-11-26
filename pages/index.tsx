import Header from '../components/header'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <h1 className={styles['title-homepage']} >Welcome</h1>
      <Footer />
    </>
  )
}
