import Layout from '@/src/components/layout/main-layout'
import '@/styles/globals.css'
import '@/styles/general.scss'

export default function App({ Component, pageProps }) {
   return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
   
   )
   
}
