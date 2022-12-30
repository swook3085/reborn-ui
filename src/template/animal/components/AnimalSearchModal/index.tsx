import SlideOverLayer from '@components/overlays/SlideOverLayer'
import { ReducerType } from '@modules/store/rootReducer'
import { onClose, SlideModal } from '@modules/store/slices/slideModal'
import { useDispatch, useSelector } from 'react-redux'
import KindContainer from './KindFilter'
import SidoSigunguContainer from './SidoSigunguFilter'
import DateFilter from './DateFilter'

const AnimalSearchModal = () => {
  const sliceModal = useSelector<ReducerType, SlideModal>(
    (state) => state.sliceModal,
  )
  const dispatch = useDispatch()

  return (
    <SlideOverLayer show={sliceModal.open} onClose={() => dispatch(onClose())}>
      <KindContainer />
      <SidoSigunguContainer />
      <DateFilter />
      <div className='w-full rounded-md px-4 lg:px-0 py-6'>
        <button className='inline-flex rounded-md w-full h-full items-center justify-center border border-transparent bg-[#ECB04D] px-5 py-3 text-base font-medium text-white'>
          검색
        </button>
      </div>
    </SlideOverLayer>
  )
}

export default AnimalSearchModal
