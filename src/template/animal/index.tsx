import Layout from '@components/layout/Layout'
import AnimalSearchModal from './components/AnimalSearchModal'
import Navbar from '@components/layout/NavBar'
import type { NextPageWithLayout } from '@pages/_app'
import { ReactElement } from 'react'
import KindContainer from './components/AnimalSearchModal/KindFilter'
import SidoSigunguContainer from './components/AnimalSearchModal/SidoSigunguFilter'
import DateFilter from './components/AnimalSearchModal/DateFilter'

const AnimalMain: NextPageWithLayout = () => {
  return (
    <>
      <section aria-labelledby='products-heading' className='pt-6 pb-24'>
        <h2 id='products-heading' className='sr-only'>
          Products
        </h2>

        <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3'>
          {/* Filters */}
          <div className='hidden lg:block'>
            <h3 className='sr-only'>Categories</h3>
            <KindContainer />
            <SidoSigunguContainer />
            <DateFilter />
          </div>

          {/* Product grid */}
          <div className='lg:col-span-2'>
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
