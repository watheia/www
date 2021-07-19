import { AppProps } from "next/app"
import Head from "next/head"
import "./styles.css"

function WApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Watheia Gatekeeper</title>
      </Head>
      <div className="app">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default WApp
