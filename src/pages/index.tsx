import { useEffect, useState } from 'react'
import ResponsiveLayout from '@components/layout/ResponsiveLayout'
import {
  selectKindList,
  selectPetList,
  selectSidoList,
  selectSigunguList,
} from '@controller/petController'
import { IPetParams } from '@interface/IPet'
import { dateToString, prevMonthYear } from '@shared/utils'
import DatePicker from 'react-datepicker'
import { ko } from 'date-fns/esm/locale'
import CusDatePicker from '@components/common/CusDatePicker'

export default function Home() {
  const [sido, setSido] = useState('')
  const [sidoList, setSidoList] = useState([])
  const [sigungu, setSigungu] = useState('')

  const [sigunguList, setSigunguList] = useState([])
  const [defUpKindList] = useState([
    { value: '417000', label: '개' },
    { value: '422400', label: '고양이' },
    { value: '429900', label: '기타' },
  ])
  const [upKind, setUpKind] = useState('417000')
  const [kind, setKind] = useState('')
  const [kindList, setKindList] = useState([])
  const [startDate, setStartDate] = useState<Date>(prevMonthYear(3))
  const [endDate, setEndDate] = useState<Date>(new Date())

  useEffect(() => {
    getSidoList()
    getKindList(upKind)
  }, [])

  const getSigunguList = async (uprCd: string) => {
    const params = {
      uprCd,
    }
    setSido(uprCd)
    const list = await selectSigunguList(params)
    console.log(list.data)
    setSigunguList(list.data)
  }

  const getSidoList = async () => {
    const { data } = await selectSidoList({ numOfRows: '20' })
    setSidoList(data)
    getSigunguList(data[0].orgCd)
  }

  const getKindList = async (upKindCd: string) => {
    const params = {
      upKindCd,
    }
    setUpKind(upKindCd)
    const { data } = await selectKindList(params)
    console.log(data)
    setKindList(data)
    setKind(data[0].kindCd)
  }

  const getPetList = async () => {
    const params: IPetParams = {
      bgnde: dateToString(startDate),
      endde: dateToString(endDate),
      upKind,
      kind,
      uprCd: sido,
      orgCd: sigungu,
      page: '1',
      limit: '20',
      state: 'notice',
    }
    console.log('params', params)
    // const list = await selectPetList(params)
    // console.log(list.data)
  }

  const onClick = () => {
    console.log('조회')
    getPetList()
  }

  return (
    <>
      <ResponsiveLayout>
        <>
          <select onChange={(e) => getKindList(e.target.value)}>
            {defUpKindList.map(({ label, value }, i) => {
              return (
                <option key={i} value={value}>
                  {label}
                </option>
              )
            })}
          </select>
          <select onChange={(e) => setKind(e.target.value)}>
            {kindList.map(({ knm, kindCd }, i) => {
              return (
                <option key={i} value={kindCd}>
                  {knm}
                </option>
              )
            })}
          </select>
          <select onChange={(e) => getSigunguList(e.target.value)}>
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
            value={startDate}
            max={endDate}
            onChange={(date) => date && setStartDate(date)}
          />
          <CusDatePicker
            value={endDate}
            min={startDate}
            max={new Date()}
            onChange={(date) => date && setEndDate(date)}
          />
          <button onClick={onClick}>조회</button>
          <h1>main</h1>
        </>
      </ResponsiveLayout>
    </>
  )
}
