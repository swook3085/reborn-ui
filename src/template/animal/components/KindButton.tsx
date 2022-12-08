import Image from 'next/image'
import styled from 'styled-components'

const ButtonWrap = styled.div(
  (props: { selected: boolean }) => `
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 2px 0px;
  border: 1px solid rgb(217, 217, 217);
  flex: 1;
  height: 120px;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  border-color: ${props.selected ? '#ECB04D' : 'rgb(217, 217, 217)'};
`,
)

const Button = styled.button`
  background-color: #fff;
  border: none;
  flex: 1;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgb(0 0 0 / 5%);
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
`

const TitleWrap = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImagWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: end;
`

export interface IKindButtonProps {
  type?: 'dog' | 'cat' | 'all'
  title: string
  active?: boolean
  value?: string
  onClick?: (value: string) => void
}

const KindButton = ({
  type = 'all',
  title,
  onClick,
  active = false,
  value = '',
}: IKindButtonProps) => {
  return (
    <ButtonWrap selected={active}>
      <Button onClick={() => onClick && onClick(value)}>
        <ImagWrap>
          <Image
            src={`/reborn-ui/images/happy${type === 'all' ? 'dog' : type}.png`}
            alt={title}
            width={65}
            height={65}
          />
        </ImagWrap>
        <TitleWrap>
          <p>{title}</p>
        </TitleWrap>
      </Button>
    </ButtonWrap>
  )
}

export default KindButton
