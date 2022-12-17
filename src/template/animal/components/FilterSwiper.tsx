import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react'
import type { Swiper } from 'swiper'
import 'swiper/swiper.min.css'
import FilterButton from './FilterButton'
import { ISwiperItem } from '@shared/interface/IPet'

interface IFilterSwiperProps {
  list: ISwiperItem[]
  value: string
  onClick: (val: string, idx: number) => void
  onSwiper: (swiper: Swiper) => void
}

const FilterSwiper = ({
  onSwiper,
  list,
  onClick,
  ...args
}: IFilterSwiperProps) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ReactSwiper
        slidesPerView={'auto'}
        spaceBetween={8}
        observer
        observeParents
        onSwiper={onSwiper}
      >
        {list.map(({ label, value }, i) => {
          return (
            <SwiperSlide key={value}>
              <FilterButton
                active={value === args['value']}
                onClick={() => onClick(value, i)}
              >
                {label}
              </FilterButton>
            </SwiperSlide>
          )
        })}
      </ReactSwiper>
    </div>
  )
}

export default FilterSwiper
