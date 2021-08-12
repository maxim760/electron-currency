import { useMemo, useEffect } from 'react'
import { ICurrencyContext } from '../../../context/CurrencyContext'
import { useSelect } from '../../../hooks/useSelect'

type Props = {
  currencies: ICurrencyContext['currencies']
  setActiveCurrency: ICurrencyContext['setActiveCurrency']
}

export const useSelectOptions = ({ currencies, setActiveCurrency }: Props) => {
  const selectOptions = useMemo(() => {
    return Object.keys(currencies).map((key) => ({
      label: currencies[key].fullName,
      value: key,
    }))
  }, [currencies])
  const selectProps = useSelect(selectOptions, null, { defaultTitle: 'Choose' })
  useEffect(() => {
    const newSelected = selectProps.value?.value
    if (!newSelected || !currencies) {
      setActiveCurrency(null)
    } else {
      setActiveCurrency(currencies[newSelected])
    }
  }, [selectProps.value?.value, currencies, setActiveCurrency])
  return selectProps
}
