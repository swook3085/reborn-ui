// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import http from '@http'
import { getServiceURL } from '@shared/utils'

const selectSidoList = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = getServiceURL('sido', req.query)
  const response = await http.get(url)
  try {
    const list = response.data.response.body.items.item || []
    res.status(200).json(list)
  } catch (error) {
    res.status(500).json([])
  }
}

export default selectSidoList
