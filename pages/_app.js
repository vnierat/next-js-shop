import "../styles/globals.css";
import { GlobalProvider } from "../state/global-context";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../theme/theme";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  </ThemeProvider>
);

export default MyApp;
