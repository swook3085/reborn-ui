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
}

export const searchFilter = createSlice({
  name: 'searchFilter',
  initialState: {
    upKind: '0',
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
  },
  reducers: {
    setKind: (state, action) => {
      state.kind = action.payload
    },
    setUpKind: (state, action) => {
      state.upKind = action.payload
    },
    setSido: (state, action) => {
      state.sido = action.payload
    },
    setSigungu: (state, action) => {
      state.sigungu = action.payload
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
      state.startDate = action.payload
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload
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
} = searchFilter.actions
export default searchFilter.reducer
