import '../scss/global.scss';
import 'semantic-ui-css/semantic.min.css'
import BasicLayout from '../layouts/BasicLayout';

export default function MyApp({ Component, pageProps }) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  )
}

