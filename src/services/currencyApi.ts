import { $host, baseUrlCurrency } from '.'
import {
  ICourseOfCurrency,
  IFullNamesOfCurrency,
  ICurrencyByCountry,
  ICountriesByCurrency,
  WithCurError,
} from '../types/currency'

export const currencyApi = {
  async getCoursesOfCurrency(): Promise<ICourseOfCurrency> {
    try {
      const { data } = await $host.get<WithCurError<ICourseOfCurrency>>(
        baseUrlCurrency + '/latest',
      )

      if (!data.success) {
        throw new Error(data.error.info)
      }
      return data
    } catch (error) {
      console.log(error)
      throw new Error('Could not get currency rates.' + error.message)
    }
  },
  async getFullNamesOfCurrency(): Promise<IFullNamesOfCurrency> {
    try {
      const { data } = await $host.get<WithCurError<IFullNamesOfCurrency>>(
        baseUrlCurrency + '/symbols',
      )
      if (!data.success) {
        throw new Error(data.error.info)
      }
      return data
    } catch (error) {
      throw new Error('Could not get full currency names.' + error.message)
    }
  },
  async getObjectCountryByCurrency(): Promise<ICountriesByCurrency> {
    try {
      const { data } = await $host.get<ICurrencyByCountry>(
        'https://gist.githubusercontent.com/maxim760/1882d19029e842b4e6b862e888c4f41f/raw/0db81c3c479f0446782555d0cdb4e15f4211998d/countries.json',
      )
      return Object.keys(data).reduce((acc: ICountriesByCurrency, country) => {
        const currency = data[country]
        if (!currency || !country) {
          return acc
        }
        if (!acc[currency]) {
          acc[currency] = []
        }
        acc[currency].push(country)
        return acc
      }, {})
    } catch (error) {
      throw new Error('Could not get a currency for each country')
    }
  },
}
