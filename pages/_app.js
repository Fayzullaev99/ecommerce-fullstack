import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import store from '@/store'
import '@/styles/globals.scss'
import Head from 'next/head'

let persistor = persistStore(store)

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>Shoppay</title>
      <meta name="description" content="Shoppay-online shopping service for all of your needs" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  </>
}
