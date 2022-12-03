import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'

const MobileHeader = () => {
  return (
    <div className='header'>
      <div className='logo-wrap'>
        <div className='logo'></div>
      </div>
      <div className='filter-wrap'>
        <button>
          <FilterAltOutlinedIcon fontSize='large' />
        </button>
      </div>
    </div>
  )
}

export default MobileHeader
