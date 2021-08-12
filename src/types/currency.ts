type IErrorGetCurrency = {
  success: false
  error: {
    code: number
    type: string
    info: string
  }
}

export type WithCurError<T> = T | IErrorGetCurrency

export type ICourseOfCurrency = {
  success: true
  timestamp: number
  base: string
  date: string
  rates: {
    [key: string]: number
  }
}

export type IFullNamesOfCurrency = {
  success: true
  symbols: {
    [key: string]: string
  }
}

export type ICurrencyByCountry = {
  [key: string]: string
}

export type ICountriesByCurrency = {
  [key: string]: string[]
}

export type ICurrencyItem = {
  price: number
  countries: string[]
  fullName: string
}

export type ICurrencyData = {
  currencies: {
    [key: string]: ICurrencyItem
  }
  base: string
}
