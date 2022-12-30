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
import FilterSelect from '../../FilterSelect'

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
      { value: '', label: '전체' },
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
    if (isEmpty(uprCd)) {
      dispatch(setSigunguList([]))
      return
    }

    const params = {
      uprCd,
    }
    const data = await selectSigunguList(params)
    const cData: IFilterListItem[] = [
      { value: '', label: '전체' },
      ...data.map((props) => {
        return {
          label: props['orgdownNm'],
          value: props['orgCd'],
        }
      }),
    ]
    console.log(cData)
    dispatch(setSigunguList(cData))
    // setSigunguList(data)
  }

  const onSidoClick = (value: string) => {
    dispatch(setSido(value))
    dispatch(setSigungu(''))
    getSigunguList(value)
  }

  const onSigunguClick = (value: string) => {
    dispatch(setSigungu(value))
  }

  useEffect(() => {
    getSidoList()
  }, [])

  return (
    <>
      <FilterSelect
        title='시/도'
        list={store.sidoList}
        value={store.sido}
        onChange={(value) => onSidoClick(value)}
      />
      <FilterSelect
        title='시/군/구'
        list={store.sigunguList}
        value={store.sigungu}
        onChange={(value) => onSigunguClick(value)}
      />
    </>
  )
}

export default SidoSigunguContainer
