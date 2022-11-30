import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'

const MobileHeader = () => {
  return (
    <header className='header'>
      <div className='logo-wrap'>
        <div className='logo'></div>
      </div>
      <div className='filter-wrap'>
        <button>
          <FilterAltOutlinedIcon fontSize='large' />
        </button>
      </div>
    </header>
  )
}

export default MobileHeader
