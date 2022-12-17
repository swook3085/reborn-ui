import { selectSidoList, selectSigunguList } from '@controller/petController'
import { ReducerType } from '@modules/store/rootReducer'
import {
  ISearchFilter,
  setSido,
  setSidoList,
  setSigungu,
  setSigunguList,
} from '@modules/store/slices/searchFilter'
import { ISwiperItem } from '@shared/interface/IPet'
import { isEmpty } from 'lodash'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { Swiper } from 'swiper'
import 'swiper/swiper.min.css'
import CntWrap from '../../CntWrap'
import FilterSwiper from '../../FilterSwiper'

const SidoSigunguContainer = () => {
  const sidoSwiperRef = useRef<Swiper>()
  const sigunguSwiperRef = useRef<Swiper>()
  const store = useSelector<ReducerType, ISearchFilter>(
    (state) => state.sliceSearchFilter,
  )
  const dispatch = useDispatch()

  const getSidoList = async () => {
    const stSidoList = store.sidoList
    if (stSidoList.length > 0) return
    const data = await selectSidoList({ numOfRows: '20' })
    const cData: ISwiperItem[] = [
      { value: '', label: '모든 지역' },
      ...data.map((props) => {
        return {
          label: props['orgdownNm'],
          value: props['orgCd'],
        }
      }),
    ]
    dispatch(setSidoList(cData))
    // getSigunguList(data[0].orgCd)
  }

  const getSigunguList = async (uprCd: string) => {
    dispatch(setSigungu(uprCd))
    if (isEmpty(uprCd)) {
      dispatch(setSigunguList([]))
      return
    }

    const params = {
      uprCd,
    }
    const data = await selectSigunguList(params)
    console.log(data)
    const cData: ISwiperItem[] = data.map((props) => {
      return {
        label: props['orgdownNm'],
        value: props['orgCd'],
      }
    })
    console.log(cData)
    dispatch(setSigunguList(cData))
    // setSigunguList(data)
  }

  const onSidoClick = (value: string, index: number) => {
    dispatch(setSido(value))
    const sidoSwiper = sidoSwiperRef.current
    const sigunguSwiper = sigunguSwiperRef.current
    if (sidoSwiper) {
      sidoSwiper.slideTo(index)
    }
    if (sigunguSwiper) {
      sigunguSwiper.slideTo(0)
    }
    getSigunguList(value)
  }

  const onSigunguClick = (value: string, index: number) => {
    dispatch(setSigungu(value))
    const swiper = sigunguSwiperRef.current
    if (swiper) {
      swiper.slideTo(index)
    }
  }

  useEffect(() => {
    getSidoList()
  }, [])
  return (
    <>
      <CntWrap title='지역'>
        <FilterSwiper
          list={store.sidoList}
          value={store.sido}
          onSwiper={(swiper) => (sidoSwiperRef.current = swiper)}
          onClick={(value, i) => onSidoClick(value, i)}
        />
      </CntWrap>
      {store.sigunguList.length > 0 ? (
        <CntWrap title='지역'>
          <FilterSwiper
            list={store.sigunguList}
            value={store.sigungu}
            onSwiper={(swiper) => (sigunguSwiperRef.current = swiper)}
            onClick={(value, i) => onSigunguClick(value, i)}
          />
        </CntWrap>
      ) : null}
    </>
  )
}

export default SidoSigunguContainer
