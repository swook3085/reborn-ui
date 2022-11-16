import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

//* 반응형 디바이스 체크 hook
const useDevice = (): { isPc: boolean; isMobile: boolean } => {
  const [isPc, setIsPc] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const pc = useMediaQuery({
    query: '(min-width:768px)',
  })
  const mobile = useMediaQuery({
    query: '(max-width:767px)',
  })

  useEffect(() => {
    setIsPc(pc)
    setIsMobile(mobile)
  }, [pc, mobile])

  return {
    isPc,
    isMobile,
  }
}

export default useDevice
