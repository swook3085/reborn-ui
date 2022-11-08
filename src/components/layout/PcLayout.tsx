import styled from 'styled-components'

const ContentsStyle = styled.div`
  width: 100%;
  display: flex;
`
const SideContStyle = styled.div`
  width: 150px;
  background: black;
  display: flex;
`

const MainContStyle = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
`

type pcProps = {
  children: JSX.Element
}

export default function PcLayout({ children }: pcProps) {
  return (
    <>
      <ContentsStyle>
        <SideContStyle />
        <MainContStyle>{children}</MainContStyle>
        <SideContStyle />
      </ContentsStyle>
    </>
  )
}
