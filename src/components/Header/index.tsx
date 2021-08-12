import React from 'react'
import { useCurrencyContext } from '../../context/CurrencyContext'
import { AppSelect } from '../AppSelect'
import styles from './header.module.css'
import { useSelectOptions } from './hooks/useSelectOptions'

export const Header: React.FC = () => {
  const { currencies, setActiveCurrency } = useCurrencyContext()
  const selectProps = useSelectOptions({ currencies, setActiveCurrency })
  return (
    <header className={styles.header}>
      <span className={styles.logoTitle}>Currencies</span>
      <AppSelect
        className={styles.select}
        label="Choose a currency"
        isSearchable
        {...selectProps}
      />
    </header>
  )
}
