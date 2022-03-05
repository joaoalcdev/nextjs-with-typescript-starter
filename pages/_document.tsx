import React from 'react'
import Document, {
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <>
        <Html lang="en">
          <Head>
            <title>CHANGE ME</title>
            {/* Website Fonts Configuration */}
            {/* default imports */}
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            {/* custom imports | add your fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>


            {/* Website Name Meta-tags Configuration */}
            <meta name="author" content="Author"></meta>
            <meta itemProp="name" content="Your SocialMedia Name"></meta>
            <meta name="article:author" content="Author"></meta>
            <meta name="application-name" content="Application Name"></meta>
            <meta property="og:site_name" content="Site Name"></meta>
            <meta name="apple-mobile-web-app-title" content="Web Title"></meta>


            {/* Theme Color Global Configuration */}
            <meta name="theme-color" content="#ffffff"></meta>
            <meta name="msapplication-TileColor" content="#ffffff"></meta>
            <meta name="msapplication-navbutton-color" content="#ffffff"></meta>
            <meta name="apple-mobile-web-app-status-bar-style" content="#ffffff"></meta>


            {/* Website Icons Configuration */}
            {/* Tile Configuration msapplication */}
            <meta name="msapplication-TileImage" content="mstile-144x144.png"></meta>
            <meta name="msapplication-TileColor" content="#ffffff"></meta>
            <meta name="msapplication-config" content="browserconfig.xml"></meta>
            {/* all devices */}
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico"></link>
            <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"></link>
            <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"></link>
            <link rel="icon" type="image/png" sizes="192x192" href="android-chrome-192x192.png"></link>
            <link rel="icon" type="image/png" sizes="194x194" href="favicon-194x194.png"></link>
            {/* only apple devices */}
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png"></link>
            <link rel="apple-touch-icon" sizes="57x57" href="favicon-57x57.png"></link>
            <link rel="apple-touch-icon" sizes="60x60" href="apple-touch-icon-60x60.png"></link>
            <link rel="apple-touch-icon" sizes="72x72" href="apple-touch-icon-72x72.png"></link>
            <link rel="apple-touch-icon" sizes="76x76" href="apple-touch-icon-76x76.png"></link>
            <link rel="apple-touch-icon" sizes="114x114" href="apple-touch-icon-114x114.png"></link>
            <link rel="apple-touch-icon" sizes="120x120" href="apple-touch-icon-120x120.png"></link>
            <link rel="apple-touch-icon" sizes="144x144" href="apple-touch-icon-144x144.png"></link>
            <link rel="apple-touch-icon" sizes="152x152" href="apple-touch-icon-152x152.png"></link>
            <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon-180x180.png"></link>
            <link rel="mask-icon" href="safari-pinned-tab.svg" color="#ffffff"></link>


            {/* Website Images Configuration Sizes Configuration */}
            <meta property="og:locale" content="en"></meta>
            <meta property="og:image:type" content="/assets/favicon.ico"></meta>
            <meta property="og:image:width" content="1920"></meta>
            <meta property="og:image:height" content="1080"></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:card" content="summary_large_image"></meta>


            {/* Social Media Title Meta-tags Configuration */}
            <meta property="og:title" content="CHANGE ME"></meta>
            <meta name="instagram:title" content="Your User SocialMedia"></meta>
            <meta name="youtube:title" content="Your User SocialMedia"></meta>
            <meta name="facebook:title" content="Your User SocialMedia"></meta>
            <meta name="twitter:title" content="Your User SocialMedia"></meta>
            <meta name="linkedin:title" content="Your User SocialMedia"></meta>


            {/* Social Media Description Meta-tags Configuration */}
            <meta name="description" content="CHANGE ME"></meta>
            <meta itemProp="description" content="Your Text Description Here"></meta>
            <meta property="og:description" content="Your Text Description SocialMedia"></meta>
            <meta name="instagram:description" content="Your Text Description SocialMedia"></meta>
            <meta name="youtube:description" content="Your Text Description SocialMedia"></meta>
            <meta name="facebook:description" content="Your Text Description SocialMedia"></meta>
            <meta name="twitter:description" content="Your Text Description SocialMedia"></meta>
            <meta name="linkedin:description" content="Your Text Description SocialMedia"></meta>


            {/* Social Media Names Site Meta-tags Configuration */}
            <meta name="instagram:site" content="https://google.com"></meta>
            <meta name="youtube:site" content="https://google.com"></meta>
            <meta name="facebook:site" content="https://google.com"></meta>
            <meta name="twitter:site" content="https://google.com"></meta>
            <meta name="linkedin:site" content="https://google.com"></meta>


            {/* Social Media Url Meta-tags Configuration         */}
            <meta property="instagram:url" content="https://google.com"></meta>
            <meta property="youtube:url" content="https://google.com"></meta>
            <meta property="facebook:url" content="https://google.com"></meta>
            <meta property="twitter:url" content="https://google.com"></meta>
            <meta property="linkedin:url" content="https://google.com"></meta>


            {/* Website REL / Property / Url Configuration */}
            <link rel="noreferrer" href="https://google.com"></link>
            <link rel="canonical" href="https://google.com"></link>
            <meta property="og:url" content="https://google.com"></meta>


            {/* Social Media Configuration Image Cards Sizes Meta-tags Configuration */}
            {/* large size */}
            <meta property="instagram:card" content="summary_large_image"></meta>
            <meta property="youtube:card" content="summary_large_image"></meta>
            <meta property="facebook:card" content="summary_large_image"></meta>
            <meta property="twitter:card" content="summary_large_image"></meta>
            <meta property="linkedin:card" content="summary_large_image"></meta>


            {/* Website / SocialMedia Images Configuration */}
            <meta name="image" content="/assets/favicon.ico"></meta>
            <meta itemProp="image" content="/assets/favicon.ico"></meta>
            <meta property="og:image" content="/assets/favicon.ico"></meta>
            <meta name="youtube:image" content="/assets/favicon.ico"></meta>
            <meta name="instagram:image" content="/assets/favicon.ico"></meta>
            <meta name="facebook:image" content="/assets/favicon.ico"></meta>
            <meta name="twitter:image" content="/assets/favicon.ico"></meta>
            <meta name="linkedin:image" content="/assets/favicon.ico"></meta>


            {/* Website Manifest Configuration */}
            <link rel="manifest" href="/manifest.json"></link>


            {/* Other settings */}
            <meta charSet="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>


            {/* FINISH DOCUMENT */}
          </Head>
          <Main />
          <NextScript />
        </Html>
      </>
    )
  }
}