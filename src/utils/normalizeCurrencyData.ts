import {
  ICourseOfCurrency,
  IFullNamesOfCurrency,
  ICurrencyData,
  ICountriesByCurrency,
} from '../types/currency'

type Props = {
  courses: ICourseOfCurrency
  fullNames: IFullNamesOfCurrency
  countries: ICountriesByCurrency
}

export const normalizeCurrencyData = ({
  courses: coursesObject,
  fullNames,
  countries: countriesObject,
}: Props): ICurrencyData => {
  const courses = coursesObject.rates
  const currencies = Object.keys(courses).reduce(
    (acc: ICurrencyData['currencies'], shortCurrency) => {
      const fullName = fullNames.symbols[shortCurrency]
      const countries = countriesObject[shortCurrency]
      const price = courses[shortCurrency]
      acc[shortCurrency] = { fullName, countries, price }
      return acc
    },
    {},
  )
  const base = coursesObject.base
  return { currencies, base }
}
