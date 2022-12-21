import { ReactNode } from 'react'

const CntWrap = ({ children }: { children: ReactNode }) => {
  return (
    <div className='px-4 lg:px-0 py-3 font-medium text-gray-900'>
      {children}
    </div>
  )
}

export default CntWrap
