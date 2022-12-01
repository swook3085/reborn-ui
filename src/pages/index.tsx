import { useEffect, useState } from 'react'
import {
  selectKindList,
  selectPetList,
  selectSidoList,
  selectSigunguList,
} from '@controller/petController'
import { IPetParams } from '@interface/IPet'
import { dateToString, getServiceURL, prevMonthYear } from '@shared/utils'
import CusDatePicker from '@components/common/CusDatePicker'
import Sheet from 'react-modal-sheet'

import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import http from '@modules/lib/customAxios'

export default function Home() {
  const [open, setOpen] = useState(false)
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
    // getKindList(upKind)
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
    // const { data } = await selectSidoList({ numOfRows: '20' })
    const url = getServiceURL('sido', { numOfRows: '20' })
    const response = await http.get(url)
    console.log(response)
    // try {
    //   const list = response.data.response.body.items.item || []
    //   res.status(200).json(list)
    // } catch (error) {
    //   res.status(500).json([])
    // }

    // setSidoList(data)
    // getSigunguList(data[0].orgCd)
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
      <button onClick={() => setOpen(true)}>열기</button>
      <Sheet
        isOpen={open}
        rootId='__next'
        onClose={() => setOpen(false)}
        // detent='content-height'
      >
        <Sheet.Container>
          <Sheet.Header />
          <button onClick={() => setOpen(false)}>
            <CloseRoundedIcon fontSize='large' />
          </button>
          <Sheet.Content></Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
      {/* <select onChange={(e) => getKindList(e.target.value)}>
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
      <h1>main</h1> */}
      {/* <div
        style={{
          height: 500,
          width: '100%',
          backgroundColor: 'red',
          position: 'fixed',
        }}
      ></div> */}
    </>
  )
}
