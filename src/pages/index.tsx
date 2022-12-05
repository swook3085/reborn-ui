import { useEffect, useState } from 'react'
import {
  selectKindList,
  selectPetList,
  selectSidoList,
  selectSigunguList,
} from '@controller/petController'
import { IPetParams } from '@interface/IPet'
import { dateFormatDash, dateToString, prevMonthYearStr } from '@shared/utils'
import CusDatePicker from '@components/common/CusDatePicker'
import BottomModal from '@components/utils/BottomModal'
import { Button, Select, DatePickerProps } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

export default function Home() {
  const [open, setOpen] = useState(false)
  const [sido, setSido] = useState('')
  const [sidoList, setSidoList] = useState([])
  const [sigungu, setSigungu] = useState('')

  const [sigunguList, setSigunguList] = useState([])
  const [defUpKindList] = useState([
    { value: '', label: '전체' },
    { value: '417000', label: '개' },
    { value: '422400', label: '고양이' },
    { value: '429900', label: '기타' },
  ])
  const [upKind, setUpKind] = useState('417000')
  const [kind, setKind] = useState('')
  const [kindList, setKindList] = useState<{ value: string; label: string }[]>(
    [],
  )
  const [loading, setLoading] = useState<boolean>(false)
  const [startDate, setStartDate] = useState<string>(prevMonthYearStr(3))
  const [endDate, setEndDate] = useState<string>(dateFormatDash(new Date()))

  useEffect(() => {
    getSidoList()
    getKindList(upKind)
  }, [])

  const getSigunguList = async (uprCd: string) => {
    const params = {
      uprCd,
    }
    setSido(uprCd)
    const data = await selectSigunguList(params)
    console.log(data)
    setSigunguList(data)
  }

  const getSidoList = async () => {
    const data = await selectSidoList({ numOfRows: '20' })
    console.log(data)
    // try {
    //   const list = response.data.response.body.items.item || []
    //   res.status(200).json(list)
    // } catch (error) {
    //   res.status(500).json([])
    // }

    setSidoList(data)
    getSigunguList(data[0].orgCd)
  }

  const getKindList = async (upKindCd: string) => {
    const params = {
      upKindCd,
    }
    setLoading(true)
    setUpKind(upKindCd)
    const data = await selectKindList(params)
    console.log(data)
    const kindSelectData = data.map(({ knm, kindCd }) => {
      return {
        value: kindCd,
        label: knm,
      }
    })
    setKindList([{ value: '', label: '전체' }, ...kindSelectData])
    setKind(data[0].kindCd)
    setLoading(false)
  }

  const getPetList = async () => {
    const params: IPetParams = {
      bgnde: dateToString(dayjs(startDate, 'YYYYMMDD').toDate()),
      endde: endDate,
      upKind,
      kind,
      uprCd: sido,
      orgCd: sigungu,
      page: '1',
      limit: '20',
      state: 'notice',
    }
    console.log('params', params)
    const list = await selectPetList(params)
    console.log(list)
  }

  const onClick = () => {
    console.log('조회')
    getPetList()
  }

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
    setStartDate(dateString)
  }

  return (
    <>
      <Button type='primary'></Button>
      <button onClick={() => setOpen(true)}>열기</button>
      <BottomModal show={open} onClose={() => setOpen(false)}>
        <div></div>
      </BottomModal>
      <Select
        labelInValue
        defaultValue={{ value: '', label: '전체' }}
        style={{ width: 120 }}
        onChange={({ value }) => getKindList(value)}
        options={defUpKindList}
      />
      <Select
        labelInValue
        loading={loading}
        defaultValue={{ value: '', label: '전체' }}
        style={{ width: 120 }}
        onChange={({ value }) => setKind(value)}
        options={kindList}
      />
      <select onChange={(e) => getSigunguList(e.target.value)}>
        <option value={''}>전국</option>
        {sidoList.map(({ orgdownNm, orgCd }, i) => {
          return (
            <option key={i} value={orgCd}>
              {orgdownNm}
            </option>
          )
        })}
      </select>
      <select onChange={(e) => setSigungu(e.target.value)}>
        {sigunguList.map(({ orgdownNm, orgCd }, i) => {
          return (
            <option key={i} value={orgCd}>
              {orgdownNm}
            </option>
          )
        })}
      </select>
      <CusDatePicker
        value={dayjs(startDate, 'YYYY-MM-DD')}
        disabledDate={(d) => !d || d.isAfter(endDate)}
        onChange={onChange}
      />
      <CusDatePicker
        value={dayjs(endDate, 'YYYY-MM-DD')}
        disabledDate={(d) => !d || d.isAfter(endDate) || d.isBefore(startDate)}
        onChange={onChange}
      />
      {/* <CusDatePicker
        value={startDate}
        max={endDate}
        onChange={(date) => date && setStartDate(date)}
      />
      <CusDatePicker
        value={endDate}
        min={startDate}
        max={new Date()}
        onChange={(date) => date && setEndDate(date)}
      /> */}
      <button onClick={onClick}>조회</button>
      <h1>main</h1>
    </>
  )
}
