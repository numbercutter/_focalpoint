// src/themes/theme.js
import { extendTheme } from "@chakra-ui/react"

const styles = {
  global: {
    body: {
      color: "white",
      bg: "brand.300",
      fontFamily: "Arial, sans-serif",
    },
    a: {
      color: "brand.500",
      textDecoration: "none",
    },
  },
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  styles,
  config,
  colors: {
    brand: {
      500: "#D9FF00",
      400: "#FF004C",
      300: "#16131F",
    },
  },
});

export default theme;
