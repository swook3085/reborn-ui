import DatePicker from 'react-datepicker'
import ko from 'date-fns/locale/ko'
import 'react-datepicker/dist/react-datepicker.css'

interface ICusDateProps {
  value: Date
  min?: Date
  max?: Date
  onChange?: (date: Date | null) => void
}

const CusDatePicker = ({ value, min, max, onChange }: ICusDateProps) => {
  return (
    <DatePicker
      selected={value}
      locale={ko}
      dateFormat="yyyy-MM-dd"
      className="input-datepicker"
      closeOnScroll={true}
      onChange={(date) => onChange && onChange(date)}
      maxDate={max}
      minDate={min}
    />
  )
}

export default CusDatePicker
