import SlideOverLayer from '@components/overlays/SlideOverLayer'
import { ReducerType } from '@modules/store/rootReducer'
import { onClose, ISlideModal } from '@modules/store/slices/slideModal'
import { useDispatch, useSelector } from 'react-redux'
import FilterContainer from './FilterContainer'

const AnimalSearchModal = () => {
  const sliceModal = useSelector<ReducerType, ISlideModal>(
    (state) => state.sliceModal,
  )
  const dispatch = useDispatch()

  return (
    <SlideOverLayer show={sliceModal.open} onClose={() => dispatch(onClose())}>
      <FilterContainer />
    </SlideOverLayer>
  )
}

export default AnimalSearchModal
