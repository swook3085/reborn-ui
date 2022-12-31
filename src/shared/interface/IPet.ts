export interface ISidoParams {
  numOfRows: string
}

export interface ISigunguParams {
  uprCd: string
}

export interface IKindParams {
  upKindCd: string
}

export interface IPetParams {
  bgnde: string
  endde: string
  upKind: string
  kind: string
  uprCd: string
  orgCd: string
  state: string
  page: string
  limit: string
}

export interface ISelectKindItem {
  knm: string
  kindCd: string
}

export interface IRenderKindItem {
  value: string
  label: string
}

export interface IFilterListItem {
  value: string
  label: string
}

export interface ISidoItem {
  orgdownNm: string
  orgCd: string
}

export interface ISigunguItem extends ISidoItem {
  orgdownNm: string
  orgCd: string
  uprCd: string
}

export interface IAnimalListItem {
  age: string
  careAddr: string
  careNm: string
  careTel: string
  chargeNm: string
  colorCd: string
  desertionNo: string
  filename: string
  happenDt: string
  happenPlace: string
  kindCd: string
  neuterYn: string
  noticeEdt: string
  noticeNo: string
  noticeSdt: string
  officetel: string
  orgNm: string
  popfile: string
  processState: string
  sexCd: string
  specialMark: string
  weight: string
}

export interface IAnimalListResponse {
  list: IAnimalListItem[]
  total: number
  page: number
}

export interface IKindContainerProps {
  kind: string
  upKind: string
  onChange: (
    value: string,
    state: 'kind' | 'upKind' | 'sido' | 'sigungu',
  ) => void
}

export interface ISidoContainerProps {
  sido: string
  sigungu: string
  onChange: (
    value: string,
    state: 'kind' | 'upKind' | 'sido' | 'sigungu',
  ) => void
}

export interface IAnimalFilterProps {
  kindProps: IKindContainerProps
  sidoProps: ISidoContainerProps
}
