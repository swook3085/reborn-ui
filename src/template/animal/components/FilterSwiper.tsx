import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react'
import type { Swiper } from 'swiper'
import 'swiper/swiper.min.css'
import FilterButton from './FilterButton'
import { ISwiperItem } from '@shared/interface/IPet'
import { Disclosure } from '@headlessui/react'

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
    <Disclosure.Panel className='pt-6'>
      <div className='space-y-4'>
        {list.map(({ label, value }, i) => {
          return (
            <div key={value} className='flex items-center'>
              <input
                id={`filter-${value}-${i}`}
                name={`${value}[]`}
                defaultValue={value}
                type='checkbox'
                // defaultChecked={option.checked}
                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
              />
              <label
                htmlFor={`filter-${value}-${i}`}
                className='ml-3 text-sm text-gray-600'
              >
                {label}
              </label>
            </div>
          )
        })}
      </div>
    </Disclosure.Panel>
  )
}

export default FilterSwiper
