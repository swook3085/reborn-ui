import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/outline'
import { IFilterListItem } from '@shared/interface/IPet'

interface IFilterProps {
  title: string
  list: IFilterListItem[]
  value: string
  onChange: (val: string, idx: number) => void
}

const FilterAccordion = ({ title, value, list, onChange }: IFilterProps) => {
  return (
    <Disclosure as='div' className='border-t border-gray-200 px-4 lg:px-0 py-6'>
      {({ open }) => (
        <>
          <h3 className='-mx-2 -my-3 flow-root'>
            <Disclosure.Button className='flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500'>
              <span className='font-medium text-gray-900'>
                {title} ({list.length})
              </span>
              <span className='ml-6 flex items-center'>
                {open ? (
                  <MinusIcon className='h-5 w-5' aria-hidden='true' />
                ) : (
                  <PlusIcon className='h-5 w-5' aria-hidden='true' />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          {list.length > 0 ? (
            <Disclosure.Panel className='pt-6'>
              <div className='space-y-4'>
                {list.map(({ label, ...args }, i) => (
                  <div key={args.value} className='flex items-center'>
                    <input
                      onChange={() => onChange(args.value, i)}
                      id={`filter-${args.value}-${i}`}
                      name='kind'
                      defaultValue={args.value}
                      type='radio'
                      checked={value === args.value}
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                    <label
                      htmlFor={`filter-${args.value}-${i}`}
                      className='ml-3 text-sm text-gray-600'
                    >
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          ) : null}
        </>
      )}
    </Disclosure>
  )
}

export default FilterAccordion
