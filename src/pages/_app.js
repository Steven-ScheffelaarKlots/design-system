// import "@/styles/globals.css";
import { ThemeProvider } from 'react-jss';
import theme from '../themes/base-theme/base-theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
