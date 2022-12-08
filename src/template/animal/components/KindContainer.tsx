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
  padding: 0 5px;
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
          <div
            style={{
              display: 'flex',
              height: 60,
              alignItems: 'center',
              overflow: 'auto',
              margin: '0 5px',
            }}
          >
            {kindList.map(({ label, value }) => {
              return (
                <div style={{ marginLeft: 5, marginRight: 5 }}>
                  <Button
                    type={value === kind ? 'primary' : 'default'}
                    key={value}
                    onClick={() => onKindClick(value)}
                    size='large'
                  >
                    {label}
                  </Button>
                </div>
              )
            })}
          </div>
        </CntWrap>
      ) : null}
    </>
  )
}

export default KindContainer
