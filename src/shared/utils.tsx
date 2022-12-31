import { API_KEY, API_URL } from './constants'

export const getSearchURL = (params: any, url: string) => {
  return [url, new URLSearchParams(params)].join('&')
}

export const getServiceURL = (type: string, upParams: object) => {
  const params = {
    ...upParams,
    _type: 'json',
  }
  return getSearchURL(params, `${API_URL}${type}?serviceKey=${API_KEY}`)
}

export const dateToString = (date: Date) => {
  let result = null
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  result = `${year}${leadingZeros(month, 2)}${leadingZeros(day, 2)}`

  return result
}

export const dateFormat = (date: string) => {
  let result = null
  const year = date.substring(0, 4)
  const month = date.substring(4, 6)
  const day = date.substring(6, 8)

  result = `${year}-${month}-${day}`

  return result
}

export const dateFormatYYYYMMDD = (date: string) => {
  let result = null
  const year = date.substring(0, 4)
  const month = date.substring(5, 7)
  const day = date.substring(8, 10)

  result = `${year}${month}${day}`

  return result
}

function leadingZeros(n: number | string, digits: number) {
  let zero = ''
  n = n.toString()

  if (n.length < digits) {
    for (var i = 0; i < digits - n.length; i++) zero += '0'
  }
  return zero + n
}
// 몇개월 전 날짜 구하기
export const prevMonthYear = (month: number) => {
  var date = new Date()
  var monthYear = date.getMonth()
  date.setMonth(monthYear - month)
  return date
}

export const dateFormatDash = (date: Date) => {
  return dateFormat(dateToString(date))
}

export const prevMonthYearStr = (month: number) => {
  const date = prevMonthYear(month)

  return dateFormatDash(date)
}

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}
