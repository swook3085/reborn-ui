import { createSlice } from '@reduxjs/toolkit'
import { ISwiperItem } from '@shared/interface/IPet'

export interface ISearchFilter {
  upKind: string
  kind: string
  sido: string
  sigungu: string
  dogKindList: ISwiperItem[]
  catKindList: ISwiperItem[]
  kindList: ISwiperItem[]
  sidoList: ISwiperItem[]
  sigunguList: ISwiperItem[]
}

export const searchFilter = createSlice({
  name: 'searchFilter',
  initialState: {
    upKind: '0',
    kind: '',
    sido: '',
    sigungu: '',
    kindList: [],
    dogKindList: [],
    catKindList: [],
    sidoList: [],
    sigunguList: [],
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
} = searchFilter.actions
export default searchFilter.reducer
