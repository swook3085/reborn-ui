import { DatePickerProps, DatePicker } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/ko'

dayjs.locale('ko')

interface ICusDateProps {
  value: Dayjs
  disabledDate: (d: Dayjs) => boolean
  onChange?: DatePickerProps['onChange']
}

const CusDatePicker = ({ value, disabledDate, onChange }: ICusDateProps) => {
  return (
    <DatePicker
      className='w-full h-11'
      defaultValue={value}
      disabledDate={disabledDate}
      allowClear={false}
      showToday={false}
      style={{ cursor: 'pointer' }}
      onChange={onChange}
      inputReadOnly
    />
  )
}

export default CusDatePicker
