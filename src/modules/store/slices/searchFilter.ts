import { createSlice } from '@reduxjs/toolkit'
import { IRenderKindItem } from '@shared/interface/IPet'

export interface ISearchFilter {
  upKind: string
  kind: string
  dogKindList: IRenderKindItem[]
  catKindList: IRenderKindItem[]
  kindList: IRenderKindItem[]
}

export const searchFilter = createSlice({
  name: 'searchFilter',
  initialState: {
    upKind: '0',
    kind: '',
    kindList: [],
    dogKindList: [],
    catKindList: [],
  },
  reducers: {
    setKind: (state, action) => {
      state.kind = action.payload
    },
    setUpKind: (state, action) => {
      state.upKind = action.payload
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
  },
})

export const {
  setKind,
  setUpKind,
  setCatKindList,
  setDogKindList,
  setKindList,
} = searchFilter.actions
export default searchFilter.reducer
