import { selectKindList } from '@controller/petController'
import { useRef } from 'react'
import styled from 'styled-components'
import CntWrap from '../CntWrap'
import KindButton, { IKindButtonProps } from './KindButton'
import _ from 'lodash'
import 'react-indiana-drag-scroll/dist/style.css'
import { useDispatch, useSelector } from 'react-redux'
import { ReducerType } from '@modules/store/rootReducer'
import {
  ISearchFilter,
  setCatKindList,
  setDogKindList,
  setKind,
  setKindList,
  setUpKind,
} from '@modules/store/slices/searchFilter'
import { IRenderKindItem } from '@shared/interface/IPet'
import FilterSelect from '../FilterSelect'

const KindWrap = styled.div`
  // padding: 0 5px;
  display: flex;
  justify-content: space-around;
`

const KindContainer = () => {
  const defKindList = useRef<IKindButtonProps[]>([
    { value: '', title: '모든 동물', type: 'all' },
    { value: '417000', title: '강아지', type: 'dog' },
    { value: '422400', title: '고양이', type: 'cat' },
  ])
  const { _kind, _upKind, dogKindList, catKindList, kindList } = useSelector<
    ReducerType,
    ISearchFilter
  >((state) => state.sliceSearchFilter)
  const dispatch = useDispatch()

  const getData = async (value: string) => {
    const defItem = { value: '', label: '전체' }
    let list: IRenderKindItem[] = []
    if (value === '417000' && dogKindList.length > 0) {
      list = dogKindList
    }

    if (value === '422400' && catKindList.length > 0) {
      list = catKindList
    }

    if (value === '') {
      list = [defItem]
    }

    if (list.length > 0) return list

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
    const kindList = [defItem, ...kindSelectData]

    return kindList
  }

  const onClick = async (value: string) => {
    dispatch(setUpKind(value))
    if (_.isEmpty(value)) return dispatch(setKindList([]))
    const kindList = await getData(value)

    switch (value) {
      case '417000':
        dispatch(setDogKindList(kindList))
        break
      case '422400':
        dispatch(setCatKindList(kindList))
        break
    }
    dispatch(setKindList(kindList))
    dispatch(setKind(kindList.length === 0 ? '' : kindList[0].value))
  }

  const onKindClick = (value: string) => {
    dispatch(setKind(value))
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
                active={_upKind === props.value}
                onClick={onClick}
              />
            )
          })}
        </KindWrap>
      </CntWrap>
      <FilterSelect
        title='품종'
        list={kindList}
        value={_kind}
        onChange={(value) => onKindClick(value)}
      />
    </>
  )
}

export default KindContainer
