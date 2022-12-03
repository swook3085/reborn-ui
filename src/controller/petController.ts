import http from '@http'
import {
  IKindParams,
  IPetParams,
  ISelectKindItem,
  ISidoParams,
  ISigunguParams,
} from '@interface/IPet'
import { getServiceURL } from '@shared/utils'

export const selectSidoList = async (params: ISidoParams) => {
  const url = getServiceURL('sido', params)
  const response = await http.get(url)
  try {
    const list = response.data.response.body.items.item || []
    return list
  } catch (error) {
    return []
  }
}

export const selectSigunguList = async (params: ISigunguParams) => {
  const { uprCd } = params
  const url = getServiceURL('sigungu', { upr_cd: uprCd })
  const response = await http.get(url)
  try {
    const list = response.data.response.body.items.item || []
    return list
  } catch (error) {
    return []
  }
}

export const selectKindList = async (params: IKindParams) => {
  const { upKindCd } = params
  const url = getServiceURL('kind', {
    up_kind_cd: upKindCd,
  })
  const response = await http.get(url)
  try {
    const list: ISelectKindItem[] = response.data.response.body.items.item || []
    return list
  } catch (error) {
    return []
  }
}

export const selectPetList = async (params: IPetParams) => {
  const upKind = params.upKind // 축종코드
  const kind = params.kind // 품종코드
  const uprCd = params.uprCd // 시도코드
  const orgCd = params.orgCd // 시군구코드
  const state = params.state // 상태
  const bgnde = params.bgnde // 검색 기간 시작
  const endde = params.endde // 검색 기간 종료
  const page = params.page // 페이지 번호
  const limit = params.limit // 페이지당 보여줄 개수

  const reqParams = {
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
  const url = getServiceURL('abandonmentPublic', reqParams)
  // console.log(url)
  const response = await http.get(url)
  try {
    const list = response.data.response.body.items.item || []
    return list
  } catch (error) {
    return []
  }
}
