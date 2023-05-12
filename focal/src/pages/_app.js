<<<<<<< HEAD
import { ChakraProvider } from "@chakra-ui/react"
import theme from '../themes/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
=======
// src/pages/_app.js

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
>>>>>>> 6721592a72516155befebbe9c72f63c69669b774
}

export default MyApp
