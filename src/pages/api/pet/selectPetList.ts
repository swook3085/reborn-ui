// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import http from '@http'
import { getServiceURL } from '@shared/utils'

const selectPetList = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req
  const upKind = query.upKind // 축종코드
  const kind = query.kind // 품종코드
  const uprCd = query.uprCd // 시도코드
  const orgCd = query.orgCd // 시군구코드
  const state = query.state // 상태
  const bgnde = query.bgnde // 검색 기간 시작
  const endde = query.endde // 검색 기간 종료
  const page = query.page // 페이지 번호
  const limit = query.limit // 페이지당 보여줄 개수

  const params = {
    bgnde,
    endde,
    upkind: upKind,
    kind,
    upr_cd: uprCd,
    org_cd: orgCd,
    state,
    pageNo: page,
    numOfRows: limit,
  }
  const url = getServiceURL('abandonmentPublic', params)
  // console.log(url)
  const response = await http.get(url)
  try {
    const list = response.data.response.body.items.item || []
    res.status(200).json(list)
  } catch (error) {
    res.status(500).json([])
  }
}

export default selectPetList
