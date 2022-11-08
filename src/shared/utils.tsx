export const getSearchURL = (params: any, url: string) => {
  return [url, new URLSearchParams(params)].join('&')
}

export const getServiceURL = (type: string, upParams: object) => {
  const params = {
    ...upParams,
    _type: 'json',
  }
  return getSearchURL(
    params,
    `${process.env.API_URL}${type}?serviceKey=${process.env.API_KEY}`,
  )
}
