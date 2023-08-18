import type { AppProps } from 'next/app'
import UserProvider from './UserProvider'

function MyApp({ Component, pageProps }: AppProps) {
  const todoInfo = {
    id: "1",
    todo: "ごはんを作る",
    state: "waiting",
  }

  return (
    <UserProvider todoInfo={todoInfo}>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp