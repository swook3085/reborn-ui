import { createSlice } from '@reduxjs/toolkit'

export interface ISlideModal {
  open: boolean
}

export const slideModal = createSlice({
  name: 'slideModal',
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

export const { onOpen, onClose } = slideModal.actions
export default slideModal.reducer
