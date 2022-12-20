import SlideOverLayer from '@components/overlays/SlideOverLayer'
import { ReducerType } from '@modules/store/rootReducer'
import { onClose, SlideModal } from '@modules/store/slices/slideModal'
import { useDispatch, useSelector } from 'react-redux'
import KindContainer from './KindFilter'
import SidoSigunguContainer from './SidoSigunguFilter'

const AnimalSearchModal = () => {
  const sliceModal = useSelector<ReducerType, SlideModal>(
    (state) => state.sliceModal,
  )
  const dispatch = useDispatch()
  return (
    <SlideOverLayer show={sliceModal.open} onClose={() => dispatch(onClose())}>
      <KindContainer />
      {/* <SidoSigunguContainer /> */}
    </SlideOverLayer>
  )
}

export default AnimalSearchModal
