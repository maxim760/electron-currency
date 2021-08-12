import React from 'react'
import { useCurrencyContext } from '../../context/CurrencyContext'
import { CountryItem } from './CountryItem'
import styles from './currencyItem.module.css'

export const CountryList: React.FC = () => {
  const { activeCurrency } = useCurrencyContext()
  if (!activeCurrency?.countries) {
    return <p className={styles.notCountries}>no countries {`:(`}</p>
  }
  const { countries } = activeCurrency
  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country} />
      ))}
    </div>
  )
}
