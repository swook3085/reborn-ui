import { selectKindList } from '@controller/petController'
import { Button } from 'antd'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import CntWrap from './CntWrap'
import KindButton, { IKindButtonProps } from './KindButton'
import _ from 'lodash'
import { ScrollContainer } from 'react-indiana-drag-scroll'
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
import {
  IKindParams,
  IRenderKindItem,
  ISelectKindItem,
} from '@shared/interface/IPet'
import { Swiper as Swp, SwiperSlide } from 'swiper/react'
import type { Swiper } from 'swiper'
import { FreeMode } from 'swiper'
import 'swiper/swiper.min.css'

const KindWrap = styled.div`
  padding: 0 5px;
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
  const sliceSearchFilter = useSelector<ReducerType, ISearchFilter>(
    (state) => state.sliceSearchFilter,
  )
  const dispatch = useDispatch()

  const getData = async (value: string) => {
    const defItem = { value: '', label: '전체' }
    let list: IRenderKindItem[] = []
    if (value === '417000' && sliceSearchFilter.dogKindList.length > 0) {
      list = sliceSearchFilter.dogKindList
    }

    if (value === '422400' && sliceSearchFilter.catKindList.length > 0) {
      list = sliceSearchFilter.catKindList
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
    console.log(
      'activeIndex',
      document.getElementsByClassName('swiper-slide-active'),
    )
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
                active={sliceSearchFilter.upKind === props.value}
                onClick={onClick}
              />
            )
          })}
        </KindWrap>
      </CntWrap>
      {sliceSearchFilter.kindList.length > 0 ? (
        <CntWrap title='품종'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 5px',
            }}
          >
            <Swp
              slidesPerView={'auto'}
              spaceBetween={8}
              initialSlide={0}
              scrollbar={{ draggable: true }}
              freeMode={true}
              modules={[FreeMode]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {sliceSearchFilter.kindList.map(({ label, value }, i) => {
                return (
                  <SwiperSlide key={value}>
                    <Button
                      type={
                        value === sliceSearchFilter.kind ? 'primary' : 'default'
                      }
                      className={
                        value === sliceSearchFilter.kind ? 'bg-[#ECB04D]' : ''
                      }
                      onClick={() => onKindClick(value, i)}
                      size='large'
                    >
                      {label}
                    </Button>
                  </SwiperSlide>
                )
              })}
            </Swp>
          </div>
        </CntWrap>
      ) : null}
    </>
  )
}

export default KindContainer
