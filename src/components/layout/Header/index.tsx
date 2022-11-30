import useDevice from '@shared/hooks/useDevice'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobieHeader'

const Header = () => {
  const { isMobile } = useDevice()
  return isMobile ? <MobileHeader /> : <DesktopHeader />
}

export default Header
