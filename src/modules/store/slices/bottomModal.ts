import { createSlice } from '@reduxjs/toolkit'

export interface BottomModal {
  open: boolean
}

export const bottomModal = createSlice({
  name: 'bottomModal',
  initialState: {
    open: false,
  },
  reducers: {
    onOpen: (state) => {
      state.open = true
    },
    onClose: (state) => {
      state.open = false
    },
  },
})

export const { onOpen, onClose } = bottomModal.actions
export default bottomModal.reducer
