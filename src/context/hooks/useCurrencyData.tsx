import { useState, useCallback, useEffect } from 'react'
import { useStatus } from '../../hooks/useStatus'
import { currencyApi } from '../../services/currencyApi'
import { STATUS } from '../../types/common'
import { ICurrencyData } from '../../types/currency'
import { normalizeCurrencyData } from '../../utils/normalizeCurrencyData'

export const useCurrencyData = () => {
  const status = useStatus()
  const [data, setData] = useState<ICurrencyData | null>(null)

  const fetchData = useCallback(async () => {
    status.setStatus(STATUS.LOADING)
    try {
      const [courses, fullNames, countries] = await Promise.all([
        currencyApi.getCoursesOfCurrency(),
        currencyApi.getFullNamesOfCurrency(),
        currencyApi.getObjectCountryByCurrency(),
      ])
      const normalizedData = normalizeCurrencyData({
        courses,
        fullNames,
        countries,
      })
      setData(normalizedData)
      status.setStatus(STATUS.SUCCESS)
    } catch (error) {
      status.setStatus(STATUS.ERROR, error.message)
      console.log('catch', error)
    }
  }, [])
  useEffect(() => {
    fetchData()
  }, [fetchData])
  return {
    data,
    status,
    fetchData,
  }
}
