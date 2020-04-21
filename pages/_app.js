import React from 'react'
import ContextProvider from '../components/ContextProvider'

import '../styles.css'
import '@brainhubeu/react-carousel/lib/style.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}