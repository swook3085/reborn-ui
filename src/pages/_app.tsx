import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import Header from '@components/layout/Header'
// import Layout from '@components/layout/Layout'
import { ConfigProvider } from 'antd'
import { Layout } from 'antd'
import locale from 'antd/locale/ko_KR'

const { Content } = Layout

import '../../styles/normalize.css'
import '../../styles/common.css'
import '../../styles/layout.css'
import { store } from '@modules/store/store'

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#ECB04D',
            },
          }}
          locale={locale}
        >
          <QueryClientProvider client={queryClient}>
            <Layout>
              <Content>
                <Component {...pageProps} />
              </Content>
            </Layout>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ConfigProvider>
      </Layout>
    </Provider>
  )
}

export default App
