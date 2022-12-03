import { ReactNode } from 'react'
import Sheet from 'react-modal-sheet'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

interface IBottomModalProps {
  show?: boolean
  onClose: () => void
  children: ReactNode
}

const BottomModal = ({
  children,
  show = false,
  onClose,
}: IBottomModalProps) => {
  return (
    <Sheet
      isOpen={show}
      rootId='__next'
      onClose={onClose}
      // detent='content-height'
    >
      <Sheet.Container>
        <Sheet.Header />
        <button onClick={onClose}>
          <CloseRoundedIcon fontSize='large' />
        </button>
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  )
}

export default BottomModal
