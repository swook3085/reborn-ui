import { DatePicker, DatePickerProps } from 'antd'
import { Dayjs } from 'dayjs'

interface ICusDateProps {
  value: Dayjs
  disabledDate: (d: Dayjs) => boolean
  onChange?: DatePickerProps['onChange']
}

const CusDatePicker = ({ value, disabledDate, onChange }: ICusDateProps) => {
  return (
    <DatePicker
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
