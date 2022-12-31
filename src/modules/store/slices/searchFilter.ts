import { createSlice } from '@reduxjs/toolkit'
import { IFilterListItem } from '@shared/interface/IPet'
import { dateFormatDash, prevMonthYearStr } from '@shared/utils'

export interface ISearchFilter {
  upKind: string
  kind: string
  sido: string
  sigungu: string
  dogKindList: IFilterListItem[]
  catKindList: IFilterListItem[]
  kindList: IFilterListItem[]
  sidoList: IFilterListItem[]
  sigunguList: IFilterListItem[]
  startDate: string
  endDate: string
  _upKind: string
  _kind: string
  _sido: string
  _sigungu: string
  _startDate: string
  _endDate: string
}

export const searchFilter = createSlice({
  name: 'searchFilter',
  initialState: {
    upKind: '',
    kind: '',
    sido: '',
    sigungu: '',
    kindList: [{ value: '', label: '전체' }],
    dogKindList: [],
    catKindList: [],
    sidoList: [{ value: '', label: '전체' }],
    sigunguList: [{ value: '', label: '전체' }],
    startDate: prevMonthYearStr(3),
    endDate: dateFormatDash(new Date()),
    _upKind: '',
    _kind: '',
    _sido: '',
    _sigungu: '',
    _startDate: prevMonthYearStr(3),
    _endDate: dateFormatDash(new Date()),
  },
  reducers: {
    setKind: (state, action) => {
      state._kind = action.payload
    },
    setUpKind: (state, action) => {
      state._upKind = action.payload
    },
    setSido: (state, action) => {
      state._sido = action.payload
    },
    setSigungu: (state, action) => {
      state._sigungu = action.payload
    },
    setKindList: (state, action) => {
      state.kindList = action.payload
    },
    setDogKindList: (state, action) => {
      state.dogKindList = action.payload
    },
    setCatKindList: (state, action) => {
      state.catKindList = action.payload
    },
    setSidoList: (state, action) => {
      state.sidoList = action.payload
    },
    setSigunguList: (state, action) => {
      state.sigunguList = action.payload
    },
    setStartDate: (state, action) => {
      state._startDate = action.payload
    },
    setEndDate: (state, action) => {
      state._endDate = action.payload
    },
    setData: (state, action) => {
      state['sido'] = action.payload.sido
      state['sigungu'] = action.payload.sigungu
      state['kind'] = action.payload.kind
      state['upKind'] = action.payload.upKind
      state['startDate'] = action.payload.startDate
      state['endDate'] = action.payload.endDate
    },
  },
})

export const {
  setKind,
  setUpKind,
  setSido,
  setSigungu,
  setCatKindList,
  setDogKindList,
  setKindList,
  setSidoList,
  setSigunguList,
  setStartDate,
  setEndDate,
  setData,
} = searchFilter.actions
export default searchFilter.reducer
