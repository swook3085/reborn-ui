import CusDatePicker from '@components/common/CusDatePicker'
import { useState } from 'react'
import { dateFormatDash, prevMonthYearStr } from '@shared/utils'
import dayjs from 'dayjs'
import { DatePickerProps } from 'antd'

const DateFilter = () => {
  const [startDate, setStartDate] = useState<string>(prevMonthYearStr(3))
  const [endDate, setEndDate] = useState<string>(dateFormatDash(new Date()))

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
    setStartDate(dateString)
  }
  return (
    <div className='border-t border-gray-200 px-4 lg:px-0 py-6 grid-cols-9 grid'>
      <div className='col-start-1 col-end-5'>
        <CusDatePicker
          value={dayjs(startDate, 'YYYY-MM-DD')}
          disabledDate={(d) => !d || d.isAfter(endDate)}
          onChange={onChange}
        />
      </div>
      <div className='col-end-10 col-span-4'>
        <CusDatePicker
          value={dayjs(endDate, 'YYYY-MM-DD')}
          disabledDate={(d) =>
            !d || d.isAfter(endDate) || d.isBefore(startDate)
          }
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default DateFilter
