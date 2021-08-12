import React, { createContext, useContext, useState } from 'react'
import { useStatus } from '../hooks/useStatus'
import { ICurrencyData, ICurrencyItem } from '../types/currency'
import { useCurrencyData } from './hooks/useCurrencyData'

export type ICurrencyContext = {
  currencies: ICurrencyData['currencies']
  base: ICurrencyData['base']
  status: ReturnType<typeof useStatus>
  activeCurrency: null | ICurrencyItem
  fetchData(): Promise<void>
  setActiveCurrency: React.Dispatch<React.SetStateAction<ICurrencyItem | null>>
}

const CurrencyContext = createContext({} as ICurrencyContext)

type Props = {
  children: React.ReactNode
}
export const CurrencyProvider: React.FC<Props> = ({ children }) => {
  const { data, fetchData, status } = useCurrencyData()
  const { currencies = {}, base = '' } = data || {}
  const [activeCurrency, setActiveCurrency] =
    useState<ICurrencyContext['activeCurrency']>(null)
  return (
    <CurrencyContext.Provider
      value={{
        currencies,
        base,
        fetchData,
        activeCurrency,
        setActiveCurrency,
        status,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

export const useCurrencyContext = () => useContext(CurrencyContext)
