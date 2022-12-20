import { selectKindList } from '@controller/petController'
import { useRef } from 'react'
import styled from 'styled-components'
import CntWrap from '../../CntWrap'
import KindButton, { IKindButtonProps } from './KindButton'
import _ from 'lodash'
import 'react-indiana-drag-scroll/dist/style.css'
import { useDispatch, useSelector } from 'react-redux'
import { ReducerType } from '@modules/store/rootReducer'
import {
  ISearchFilter,
  setUpKind,
  setKind,
  setCatKindList,
  setDogKindList,
  setKindList,
} from '@modules/store/slices/searchFilter'
import { IRenderKindItem } from '@shared/interface/IPet'
import type { Swiper } from 'swiper'
import 'swiper/swiper.min.css'
import FilterSwiper from '../../FilterSwiper'
import { Disclosure } from '@headlessui/react'
import { MinusIcon } from '@heroicons/react/outline'
import { PlusIcon } from '@heroicons/react/solid'

const KindWrap = styled.div`
  // padding: 0 5px;
  display: flex;
  justify-content: space-around;
`

const KindContainer = () => {
  const swiperRef = useRef<Swiper>()
  const defKindList = useRef<IKindButtonProps[]>([
    { value: '0', title: '모든 동물', type: 'all' },
    { value: '417000', title: '강아지', type: 'dog' },
    { value: '422400', title: '고양이', type: 'cat' },
  ])
  const store = useSelector<ReducerType, ISearchFilter>(
    (state) => state.sliceSearchFilter,
  )
  const dispatch = useDispatch()

  const getData = async (value: string) => {
    const defItem = { value: '', label: '전체' }
    let list: IRenderKindItem[] = []
    if (value === '417000' && store.dogKindList.length > 0) {
      list = store.dogKindList
    }

    if (value === '422400' && store.catKindList.length > 0) {
      list = store.catKindList
    }
    if (list.length > 0 || value === '0') return list

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
    //* 동물 타입이 변경시 품종 초기화
    const swiper = swiperRef.current
    if (swiper) {
      swiper.slideTo(0)
    }
  }

  const onKindClick = (value: string, index: number) => {
    dispatch(setKind(value))
    const swiper = swiperRef.current
    if (swiper) {
      swiper.slideTo(index)
    }
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
                active={store.upKind === props.value}
                onClick={onClick}
              />
            )
          })}
        </KindWrap>
      </CntWrap>
      {store.kindList.length > 0 ? (
        <Disclosure as='div' className='border-t border-gray-200 px-4 py-6'>
          {({ open }) => (
            <>
              <h3 className='-mx-2 -my-3 flow-root'>
                <Disclosure.Button className='flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500'>
                  <span className='font-medium text-gray-900'>품종</span>
                  <span className='ml-6 flex items-center'>
                    {open ? (
                      <MinusIcon className='h-5 w-5' aria-hidden='true' />
                    ) : (
                      <PlusIcon className='h-5 w-5' aria-hidden='true' />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className='pt-6'>
                <div className='space-y-4'>
                  {store.kindList.map(({ value, label }, i) => (
                    <div key={value} className='flex items-center'>
                      <input
                        id={`filter-${value}-${i}`}
                        name='kind'
                        defaultValue={value}
                        type='radio'
                        defaultChecked={store.kind === value}
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                      />
                      <label
                        htmlFor={`filter-${value}-${i}`}
                        className='ml-3 text-sm text-gray-600'
                      >
                        {label}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ) : null}
    </>
  )
}

export default KindContainer
