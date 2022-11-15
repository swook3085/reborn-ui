import { useMediaQuery } from 'react-responsive'

//* 반응형 디바이스 체크 hook
const useDevice = (): { isPc: boolean; isMobile: boolean } => {
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  })

  return {
    isPc,
    isMobile,
  }
}

export default useDevice
