import { onOpen } from '@modules/store/slices/bottomModal'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import { useDispatch } from 'react-redux'

const MobileHeader = () => {
  const dispatch = useDispatch()

  return (
    <div className='header'>
      <div className='logo-wrap'>
        <div className='logo'></div>
      </div>
      <div className='filter-wrap'>
        <button onClick={() => dispatch(onOpen())}>
          <FilterAltOutlinedIcon fontSize='large' />
        </button>
      </div>
    </div>
  )
}

export default MobileHeader
