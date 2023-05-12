import { ChakraProvider } from "@chakra-ui/react";
import theme from '../themes/theme';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
