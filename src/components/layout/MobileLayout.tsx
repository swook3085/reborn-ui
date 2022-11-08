import styled from "styled-components";

const ContentsStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const SideContStyle = styled.div`
    width: calc(100% - 20px);
    height: 80px;
    background: black;
    margin: 10px;
`

const MainContStyle = styled.div`
    flex: 1;
    margin: 10px;
    height: 100%;
    display: flex;
`

type mobileProps = {
    children: JSX.Element
}

function MobileLayout ({ children }:mobileProps) {
    return <>
        <ContentsStyle>
            <SideContStyle/>
            <MainContStyle>
                {children}
            </MainContStyle>
            <SideContStyle/>
        </ContentsStyle>
    </>
}

export default MobileLayout