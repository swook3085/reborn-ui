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
