import { ReactNode } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleWrap = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
`

const ContentWrap = styled.div`
  width: 100%;
  margin-bottom: 10px;
`

const CntWrap = ({
  title,
  children,
}: {
  title?: string
  children: ReactNode
}) => {
  return (
    <Wrap>
      {title ? (
        <TitleWrap>
          <Title>{title}</Title>
        </TitleWrap>
      ) : null}
      <ContentWrap>{children}</ContentWrap>
    </Wrap>
  )
}

export default CntWrap
