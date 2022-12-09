import SlideOverLayer from '@components/overlays/SlideOverLayer'
import { ReducerType } from '@modules/store/rootReducer'
import { onClose, SlideModal } from '@modules/store/slices/slideModal'
import { useDispatch, useSelector } from 'react-redux'
import CntWrap from './CntWrap'
import KindContainer from './KindContainer'

const AnimalSearchModal = () => {
  const sliceModal = useSelector<ReducerType, SlideModal>(
    (state) => state.sliceModal,
  )
  const dispatch = useDispatch()
  return (
    <SlideOverLayer show={sliceModal.open} onClose={() => dispatch(onClose())}>
      <KindContainer />
      <CntWrap title='지역'>
        <div></div>
      </CntWrap>
    </SlideOverLayer>
  )
}

export default AnimalSearchModal
