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
import Navbar from '@components/layout/NavBar'

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Navbar />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#ECB04D',
          },
        }}
        locale={locale}
      >
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ConfigProvider>
    </Provider>
  )
}

export default App
