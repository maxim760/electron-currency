import { round } from './round'

export const formatNumber = (number: number, precision = 0) => {
  return number > 1
    ? round(number, precision)
    : number.toPrecision(1 + precision)
}
