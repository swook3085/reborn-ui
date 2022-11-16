import { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface IPortalProps {
  children: ReactNode
}

const Portal = ({ children }: IPortalProps) => {
  const ref = useRef<Element | null>()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    if (document) {
      const dom = document.getElementById('portal')
      ref.current = dom // ref에 dom 값 전달
    }
  }, [])
  if (ref.current && mounted) {
    // mounted 됬고 dom이 존재하는 경우 모달 랜더링 진행
    return createPortal(children, ref.current)
  }
  return null
}

export default Portal
