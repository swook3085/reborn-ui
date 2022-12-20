import { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

interface ISlideOverLayerProps {
  show?: boolean
  title?: string
  onClose: () => void
  children: ReactNode
}

const SlideOverLayer = ({
  title,
  show = false,
  onClose,
  children,
}: ISlideOverLayerProps) => {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as='div' className='relative z-40 lg:hidden' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 z-40 flex'>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full'
          >
            <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-sm flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl'>
              <div className='flex items-center justify-between px-4'>
                <h2 className='text-lg font-medium text-gray-900'>{title}</h2>
                <button
                  type='button'
                  className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400'
                  onClick={onClose}
                >
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='mt-4 border-t border-gray-200'>{children}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SlideOverLayer
