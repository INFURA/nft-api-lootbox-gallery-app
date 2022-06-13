import type { AppProps } from 'next/app'

import '../styles/index.css';
import '../styles/overrides/swiper.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Component  {...pageProps}/>
  )
};

export default App;