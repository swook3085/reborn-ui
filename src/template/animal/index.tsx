import Layout from '@components/layout/Layout'
import AnimalSearchModal from './components/AnimalSearchModal'
import Navbar from '@components/layout/NavBar'
import type { NextPageWithLayout } from '@pages/_app'
import { ReactElement } from 'react'
import KindContainer from './components/AnimalSearchModal/KindFilter'
import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/outline'

const AnimalMain: NextPageWithLayout = () => {
  return (
    <>
      <section aria-labelledby='products-heading' className='pt-6 pb-24'>
        <h2 id='products-heading' className='sr-only'>
          Products
        </h2>

        <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
          {/* Filters */}
          <div className='hidden lg:block'>
            <h3 className='sr-only'>Categories</h3>
            <KindContainer />
            <Disclosure as='div' className='border-b border-gray-200 py-6'>
              <h3 className='-my-3 flow-root'>
                <Disclosure.Button className='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'>
                  <span className='font-medium text-gray-900'>
                    {/* {section.name} */}
                  </span>
                  <span className='ml-6 flex items-center'>
                    {true ? (
                      <MinusIcon className='h-5 w-5' aria-hidden='true' />
                    ) : (
                      <PlusIcon className='h-5 w-5' aria-hidden='true' />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
            </Disclosure>
            {/* {filters.map((section) => (
            <Disclosure
              as='div'
              key={section.id}
              className='border-b border-gray-200 py-6'
            >
              {({ open }) => (
                <>
                  <h3 className='-my-3 flow-root'>
                    <Disclosure.Button className='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'>
                      <span className='font-medium text-gray-900'>
                        {section.name}
                      </span>
                      <span className='ml-6 flex items-center'>
                        {open ? (
                          <MinusIcon
                            className='h-5 w-5'
                            aria-hidden='true'
                          />
                        ) : (
                          <PlusIcon
                            className='h-5 w-5'
                            aria-hidden='true'
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </h3>
                  <Disclosure.Panel className='pt-6'>
                    <div className='space-y-4'>
                      {section.options.map((option, optionIdx) => (
                        <div
                          key={option.value}
                          className='flex items-center'
                        >
                          <input
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            defaultValue={option.value}
                            type='checkbox'
                            defaultChecked={option.checked}
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          />
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className='ml-3 text-sm text-gray-600'
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))} */}
          </div>

          {/* Product grid */}
          <div className='lg:col-span-3'>
            {/* Replace with your content */}
            <div className='h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full' />
            {/* /End replace */}
          </div>
        </div>
      </section>
      <AnimalSearchModal />
    </>
  )
}

AnimalMain.layout = (page: ReactElement) => {
  return (
    <Layout>
      <>
        <Navbar />
        {page}
      </>
    </Layout>
  )
}

export default AnimalMain
