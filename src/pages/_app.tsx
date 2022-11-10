import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import '../../styles/normalize.css'
import '../../styles/common.css'
import Header from '@components/common/Header'

const queryClient = new QueryClient()

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
