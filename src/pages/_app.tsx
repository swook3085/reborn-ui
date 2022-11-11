import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import '../../styles/normalize.css'
import '../../styles/common.css'
import '../../styles/layout.css'
import Header from '@components/common/Header'
import Layout from '@components/layout/Layout'

const queryClient = new QueryClient()

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
