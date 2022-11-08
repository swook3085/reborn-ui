import { useMediaQuery } from 'react-responsive'
import MobileLayout from './MobileLayout'
import PcLayout from './PcLayout'

type resLayoutProps = {
    children: JSX.Element
}

export default function ResponsiveLayout ({ children }:resLayoutProps){
    const isPC:boolean = useMediaQuery({ minWidth: 768})

    return isPC ? <PcLayout children={children} /> : <MobileLayout children={children} />
}