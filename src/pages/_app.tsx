import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import locale from 'antd/locale/ko_KR'
import 'tailwindcss/tailwind.css'

import '../../styles/normalize.css'
import '../../styles/common.css'
import '../../styles/layout.css'
import { store } from '@modules/store/store'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

const queryClient = new QueryClient()

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.layout ?? ((page) => page)
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#ECB04D',
          },
        }}
        locale={locale}
      >
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ConfigProvider>
    </Provider>
  )
}

export default App
