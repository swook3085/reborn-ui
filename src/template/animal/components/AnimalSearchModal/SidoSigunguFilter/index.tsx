import { selectSidoList, selectSigunguList } from '@controller/petController'
import { ReducerType } from '@modules/store/rootReducer'
import {
  ISearchFilter,
  setSido,
  setSidoList,
  setSigungu,
  setSigunguList,
} from '@modules/store/slices/searchFilter'
import { IFilterListItem } from '@shared/interface/IPet'
import { isEmpty } from 'lodash'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilterAccordion from '../../FilterAccordion'

const SidoSigunguContainer = () => {
  const store = useSelector<ReducerType, ISearchFilter>(
    (state) => state.sliceSearchFilter,
  )
  const dispatch = useDispatch()

  const getSidoList = async () => {
    const stSidoList = store.sidoList
    if (stSidoList.length > 0) return
    const data = await selectSidoList({ numOfRows: '20' })
    const cData: IFilterListItem[] = [
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
    const cData: IFilterListItem[] = data.map((props) => {
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
    getSigunguList(value)
  }

  const onSigunguClick = (value: string, index: number) => {
    dispatch(setSigungu(value))
  }

  useEffect(() => {
    getSidoList()
  }, [])
  return (
    <>
      <FilterAccordion
        title='지역'
        list={store.sidoList}
        value={store.sido}
        onChange={(value, i) => onSidoClick(value, i)}
      />
      {store.sigunguList.length > 0 ? (
        <FilterAccordion
          title='시군구'
          list={store.sigunguList}
          value={store.sigungu}
          onChange={(value, i) => onSigunguClick(value, i)}
        />
      ) : null}
    </>
  )
}

export default SidoSigunguContainer
