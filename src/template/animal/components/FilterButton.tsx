import { Button } from 'antd'
import { ReactNode } from 'react'

interface IFilterButtonProps {
  active: boolean
  children: ReactNode
  onClick: () => void
}

const FilterButton = ({ active, children, onClick }: IFilterButtonProps) => {
  return (
    <Button
      type={active ? 'primary' : 'default'}
      className={active ? 'bg-[#ECB04D]' : ''}
      onClick={onClick}
      size='large'
    >
      {children}
    </Button>
  )
}

export default FilterButton
