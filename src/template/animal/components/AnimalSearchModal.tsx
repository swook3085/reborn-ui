import BottomModal from '@components/utils/BottomModal'
import { ReducerType } from '@modules/store/rootReducer'
import {
  BottomModal as BottomModalSlice,
  onClose,
} from '@modules/store/slices/bottomModal'
import { useDispatch, useSelector } from 'react-redux'
import CntWrap from './CntWrap'
import KindContainer from './KindContainer'

const AnimalSearchModal = () => {
  const bottomModal = useSelector<ReducerType, BottomModalSlice>(
    (state) => state.bottomModal,
  )
  const dispatch = useDispatch()
  return (
    <BottomModal show={bottomModal.open} onClose={() => dispatch(onClose())}>
      <KindContainer />
      <CntWrap title='지역'>
        <div></div>
      </CntWrap>
    </BottomModal>
  )
}

export default AnimalSearchModal
