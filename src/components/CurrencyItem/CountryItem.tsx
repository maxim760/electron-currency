import React from 'react'
import { getFlagSrcFromName } from '../../utils/getFlagSrcFromName'
import styles from './currencyItem.module.css'

interface CountryItemProps {
  country: string
}

export const CountryItem: React.FC<CountryItemProps> = ({ country }) => {
  return (
    <div className={styles.country}>
      <img
        className={styles.countryImg}
        alt={country}
        src={getFlagSrcFromName(country)}
      />
      <span className={styles.countryName}>{country}</span>
    </div>
  )
}
