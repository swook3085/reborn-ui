import { ReactNode } from 'react'
import Sheet from 'react-modal-sheet'
import styled from 'styled-components'
import { CloseOutlined } from '@ant-design/icons'
import { Button } from 'antd'

interface IBottomModalProps {
  show?: boolean
  onClose: () => void
  children: ReactNode
}

const CloseWrap = styled.div`
  display: flex;
  padding-right: 30px;
  justify-content: end;
`

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
        <CloseWrap>
          <Button
            type='text'
            size='large'
            onClick={onClose}
            icon={<CloseOutlined style={{ fontSize: '18px' }} />}
          ></Button>
        </CloseWrap>
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  )
}

export default BottomModal
