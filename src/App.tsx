import { Header } from './components/Header'
import { Loader } from './components/Loader'
import { useCurrencyContext } from './context/CurrencyContext'
import styles from './app.module.css'
import { Button } from './components/Button'
import { CurrencyItem } from './components/CurrencyItem'

export const App = () => {
  const { fetchData, status } = useCurrencyContext()
  const { isError, isLoading, isSuccess, statusMessage } = status

  return (
    <div className={styles.app}>
      {isError && (
        <div className={styles.center}>
          <h2 className={styles.error}>
            Error: {statusMessage || 'unknown error'}
          </h2>
          <Button onClick={fetchData}>Try Again</Button>
        </div>
      )}
      {isLoading && <Loader className={styles.center}>Loading...</Loader>}
      {isSuccess && (
        <>
          <Header />
          <main className={styles.main}>
            <CurrencyItem />
          </main>
        </>
      )}
    </div>
  )
}
