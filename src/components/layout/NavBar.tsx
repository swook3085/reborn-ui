import React from 'react'
import { FilterIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { onOpen } from '@modules/store/slices/slideModal'

const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <div className='flex items-baseline justify-between border-b border-gray-200 pt-12 pb-2'>
      <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
        Reborn
      </h1>
      <div className='flex items-center'>
        {/* <button
          type='button'
          className='-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7'
          onClick={() => dispatch(onOpen())}
        >
          <span className='sr-only'>View grid</span>
          <FilterIcon className='h-6 w-6' aria-hidden='true' />
        </button> */}
        <button
          type='button'
          className='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'
          onClick={() => dispatch(onOpen())}
        >
          <span className='sr-only'>Filters</span>
          <FilterIcon className='h-6 w-6' aria-hidden='true' />
        </button>
      </div>
    </div>
  )
}

export default Navbar
