import { AuthProvider } from '@/contexts'
import 'semantic-ui-css/semantic.min.css'
import '@/scss/global.scss'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
