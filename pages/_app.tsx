import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import "@styles/index.css"
import { DefaultSeo } from "next-seo"
import App, { AppProps } from "next/app"
import ErrorPage from "next/error"
import Head from "next/head"
import * as React from "react"
import { getGlobalData } from "utils/api"
import { getStrapiMedia } from "utils/media"
import theme from "../components/theme"

const cache = createCache({ key: "css", prepend: true })
cache.compat = true

export default function MyApp({ Component, pageProps }: AppProps) {
  // Extract the data we need
  const { global } = pageProps
  if (global == null) {
    return <ErrorPage statusCode={404} />
  }

  const { metadata } = global

  return (
    <CacheProvider value={cache}>
      {/* Favicon */}
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon.url)} />
      </Head>
      {/* Global site metadata */}
      <DefaultSeo
        titleTemplate={`%s | ${global.metaTitleSuffix}`}
        title="Page"
        description={metadata.metaDescription}
        openGraph={{
          images: Object.values(metadata.shareImage.formats).map((image: any) => {
            return {
              url: getStrapiMedia(image.url),
              width: image.width,
              height: image.height,
            }
          }),
        }}
        twitter={{
          cardType: metadata.twitterCardType,
          handle: metadata.twitterUsername,
        }}
      />
      {/* Display the content */}
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (appContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  const globalLocale = await getGlobalData(appContext.router.locale)

  return {
    ...appProps,
    pageProps: {
      global: globalLocale,
    },
  }
}
