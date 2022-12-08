import '../styles/global.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import Layout from '../components/Layout'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#3949ab',
        light: '#6f74dd',
        dark: '#00227b',
      },
      secondary: {
        main: '#ffa726',
        light: '#ffd95b',
        dark: '#c77800',
      },
      info: {
        main: '#ff8a65',
        light: '#ffbb93',
        dark: '#c75b39',
      },
      success: {
        main: '#7cb342',
        light: '#aee571',
        dark: '#4b830d',
      },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
          disableTouchRipple: true,
        },
      },
    },
    typography: {
      fontFamily: ['Roboto', 'noto-sans-serif'].join(','),
    },
  })
  const getLayout = Component.getLayout || ((page: ReactElement) => page)

  return (
    <ThemeProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}

export default MyApp
