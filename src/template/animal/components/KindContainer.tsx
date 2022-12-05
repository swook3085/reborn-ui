import { selectKindList } from '@controller/petController'
import { Button } from 'antd'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import CntWrap from './CntWrap'
import KindButton, { IKindButtonProps } from './KindButton'
import _ from 'lodash'
import { ScrollContainer } from 'react-indiana-drag-scroll'
import 'react-indiana-drag-scroll/dist/style.css'

const KindWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const KindContainer = () => {
  const defKindList = useRef<IKindButtonProps[]>([
    { value: '', title: '모든 동물', type: 'all' },
    { value: '417000', title: '강아지', type: 'dog' },
    { value: '422400', title: '고양이', type: 'cat' },
  ])
  const [upKind, setUpKind] = useState('')
  const [kind, setKind] = useState('')
  const [kindList, setKindList] = useState<{ value: string; label: string }[]>(
    [],
  )
  const onClick = async (value: string) => {
    setUpKind(value)
    if (_.isEmpty(value)) return setKindList([])
    const params = {
      upKindCd: value,
    }
    const data = await selectKindList(params)
    const kindSelectData = data.map(({ knm, kindCd }) => {
      return {
        value: kindCd,
        label: knm,
      }
    })
    console.log(kindSelectData)
    const kindList = [{ value: '', label: '전체' }, ...kindSelectData]
    setKindList(kindList)
    setKind(kindList[0].value)
  }

  const onKindClick = (value: string) => {
    setKind(value)
  }

  return (
    <>
      <CntWrap>
        <KindWrap>
          {defKindList.current.map((props) => {
            return (
              <KindButton
                key={props.value}
                {...props}
                active={upKind === props.value}
                onClick={onClick}
              />
            )
          })}
        </KindWrap>
      </CntWrap>
      {kindList.length > 0 ? (
        <CntWrap title='품종'>
          <ScrollContainer
            style={{
              display: 'flex',
              paddingLeft: 20,
              paddingRight: 10,
              height: 60,
              alignItems: 'center',
            }}
          >
            {kindList.map(({ label, value }) => {
              return (
                <Button
                  type={value === kind ? 'primary' : 'default'}
                  key={value}
                  style={{ marginRight: 10 }}
                  onClick={() => onKindClick(value)}
                  size='large'
                >
                  {label}
                </Button>
              )
            })}
          </ScrollContainer>
        </CntWrap>
      ) : null}
    </>
  )
}

export default KindContainer
