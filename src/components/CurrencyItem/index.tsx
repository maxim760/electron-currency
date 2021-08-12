import React from 'react'
import { useCurrencyContext } from '../../context/CurrencyContext'
import { formatNumber } from '../../utils/formatNumber'
import { priceToRate } from '../../utils/priceToRate'
import { Countries } from './Countries'
import styles from './currencyItem.module.css'

export const CurrencyItem: React.FC = () => {
  const { activeCurrency, base } = useCurrencyContext()
  if (!activeCurrency) {
    return (
      <h2 className={styles.alertChoose}>
        <strong>Please choose currency</strong>
      </h2>
    )
  }
  const { fullName, price } = activeCurrency
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>
        <strong>Currency name:</strong> {fullName}
      </p>
      <p className={styles.title}>
        <strong>Rate:</strong> {formatNumber(priceToRate(price), 2)} {base}
      </p>
      <Countries />
    </div>
  )
}
