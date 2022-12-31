import { useQueryClient } from 'react-query'
import DateFilter from './DateFilter'
import KindContainer from './KindFilter'
import SidoSigunguContainer from './SidoSigunguFilter'
import { useDispatch, useSelector } from 'react-redux'
import { ReducerType } from '@modules/store/rootReducer'
import { ISearchFilter, setData } from '@modules/store/slices/searchFilter'
import { memo } from 'react'
import { onClose } from '@modules/store/slices/slideModal'

const FilterContainer = () => {
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  const { _startDate, _endDate, _upKind, _kind, _sido, _sigungu } = useSelector<
    ReducerType,
    ISearchFilter
  >((state) => state.sliceSearchFilter)

  const onClick = () => {
    const data = {
      startDate: _startDate,
      endDate: _endDate,
      kind: _kind,
      upKind: _upKind,
      sido: _sido,
      sigungu: _sigungu,
    }
    dispatch(setData(data))
    dispatch(onClose())
    queryClient.invalidateQueries(['infinitePersons', data], {
      exact: true,
    })
  }
  return (
    <>
      <KindContainer />
      <SidoSigunguContainer />
      <DateFilter />
      <div className='w-full rounded-md px-4 lg:px-0 py-6'>
        <button
          onClick={onClick}
          className='inline-flex rounded-md w-full h-full items-center justify-center border border-transparent bg-[#ECB04D] px-5 py-3 text-base font-medium text-white'
        >
          검색
        </button>
      </div>
    </>
  )
}

export default memo(FilterContainer)
