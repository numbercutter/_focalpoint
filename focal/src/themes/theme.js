import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF0077", // hot pink
      200: "#6200FF", // red
      300: "#C8FF00", // yellow
      400: "#00FF55", // green
    },
  },
})

export default theme;
