import React from 'react'
import { CountryList } from './CountryList'

import styles from './currencyItem.module.css'

export const Countries: React.FC = () => {
  return (
    <div>
      <div className={[styles.title, 'center'].join(' ')}>
        <strong>Countries</strong>
      </div>
      <CountryList />
    </div>
  )
}
