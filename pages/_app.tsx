import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import { QRCodeTheme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={QRCodeTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
