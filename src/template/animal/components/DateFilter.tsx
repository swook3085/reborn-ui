import CusDatePicker from '@components/common/CusDatePicker'
import { useRef } from 'react'
import { dateFormatDash } from '@shared/utils'
import dayjs from 'dayjs'
import { DatePickerProps } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { ReducerType } from '@modules/store/rootReducer'
import {
  ISearchFilter,
  setEndDate,
  setStartDate,
} from '@modules/store/slices/searchFilter'

const DateFilter = () => {
  const { _startDate, _endDate } = useSelector<ReducerType, ISearchFilter>(
    (state) => state.sliceSearchFilter,
  )
  const dispatch = useDispatch()
  const today = useRef<string>(dateFormatDash(new Date()))
  const onStartDateChange: DatePickerProps['onChange'] = (
    _date,
    dateString,
  ) => {
    dispatch(setStartDate(dateString))
  }

  const onEndDateChange: DatePickerProps['onChange'] = (_date, dateString) => {
    dispatch(setEndDate(dateString))
  }

  return (
    <div className='border-t border-gray-200 px-4 lg:px-0 py-4 grid-cols-9 grid'>
      <div className='col-start-1 col-end-5'>
        <label className='block text-sm mb-2 font-medium text-gray-700'>
          시작일
        </label>
        <CusDatePicker
          value={dayjs(_startDate, 'YYYY-MM-DD')}
          disabledDate={(d) => !d || d.isAfter(_endDate)}
          onChange={onStartDateChange}
        />
      </div>
      <div>
        <div className='h-5 mt-2'></div>
        <div className='flex items-center justify-center h-11'>
          <label className='block text-xl font-medium text-gray-700'>~</label>
        </div>
      </div>
      <div className='col-end-10 col-span-4'>
        <label className='block text-sm mb-2 font-medium text-gray-700'>
          종료일
        </label>
        <CusDatePicker
          value={dayjs(_endDate, 'YYYY-MM-DD')}
          disabledDate={(d) =>
            !d || d.isAfter(today.current) || d.isBefore(_startDate)
          }
          onChange={onEndDateChange}
        />
      </div>
    </div>
  )
}

export default DateFilter
