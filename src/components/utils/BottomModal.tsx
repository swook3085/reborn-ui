import Portal from '@components/common/Portal'
import { ReactNode } from 'react'

interface IBottomModalProps {
  children: ReactNode
  show?: boolean
}

const BottomModal = ({ children, show }: IBottomModalProps) => {
  return (
    <Portal>
      <div
        style={{
          height: 'auto',
          width: '100%',
          backgroundColor: 'red',
          alignSelf: 'flex-end',
          position: 'fixed',
          bottom: 0,
        }}
      >
        {children}
      </div>
    </Portal>
  )
}

export default BottomModal
