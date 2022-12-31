import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { IFilterListItem } from '@shared/interface/IPet'
import { CheckIcon } from '@heroicons/react/solid'
import { classNames } from '@shared/utils'

interface IFilterSelectProps {
  title: string
  list: IFilterListItem[]
  value: string
  onChange: (val: string) => void
}

const FilterSelect = ({ title, value, list, onChange }: IFilterSelectProps) => {
  const ChevronUpDownIcon = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='h-5 w-5 text-gray-400'
        aria-hidden='true'
      >
        <path
          fillRule='evenodd'
          d='M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z'
          clipRule='evenodd'
        />
      </svg>
    )
  }
  return (
    <div className='border-t border-gray-200 px-4 lg:px-0 py-4'>
      <Listbox
        value={list.find((item) => item.value === value)}
        onChange={(value) => onChange(value.value)}
      >
        {({ open, value }) => (
          <>
            <Listbox.Label className='block text-sm mb-2 font-medium text-gray-700'>
              {title}
            </Listbox.Label>
            <div className='relative mt-1'>
              <Listbox.Button className='relative h-11 w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-[#ECB04D] focus:outline-none focus:ring-1 focus:ring-[#ECB04D] sm:text-sm'>
                <span className='flex items-center'>
                  <span className='ml-3 block truncate'>{value?.label}</span>
                </span>
                <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                  <ChevronUpDownIcon />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {list.map((item) => (
                    <Listbox.Option
                      key={item.value}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-[#ECB04D]' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9 rounded-md',
                        )
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className='flex items-center'>
                            <span
                              className={classNames(
                                selected ? 'font-semibold' : 'font-normal',
                                'ml-3 block truncate',
                              )}
                            >
                              {item.label}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-[#ECB04D]',
                                'absolute inset-y-0 right-0 flex items-center pr-4',
                              )}
                            >
                              <CheckIcon
                                className='h-5 w-5'
                                aria-hidden='true'
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  )
}

export default FilterSelect
