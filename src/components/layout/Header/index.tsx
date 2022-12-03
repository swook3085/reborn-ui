import useDevice from '@shared/hooks/useDevice'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobieHeader'
import { Layout } from 'antd'

const Header = () => {
  const { isMobile } = useDevice()
  return (
    <Layout.Header
      style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}
    >
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </Layout.Header>
  )
}

export default Header
