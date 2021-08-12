import axios from 'axios'
const CURRENCY_ACCESS_KEY = process.env.REACT_APP_API_CURRENCY_KEY
const $host = axios.create()

export const baseUrlCurrency = 'http://data.fixer.io/api'

$host.interceptors.request.use((config) => {
  if (config.url?.startsWith(baseUrlCurrency)) {
    config.params = {
      ...config.params,
      access_key: CURRENCY_ACCESS_KEY,
    }
  }
  return config
})

export { $host }
