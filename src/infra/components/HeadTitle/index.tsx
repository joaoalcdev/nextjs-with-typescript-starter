/* eslint-disable @next/next/no-title-in-document-head */
/* eslint-disable @next/next/no-document-import-in-page */
import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document'

function HeadConfig() {
  return (
    <Html lang="en">
      <Head>
        <title>
          YOUR TITLE WEBSITE
        </title>
        <meta charSet="utf-8" />

        {/*  Description Tags  */}
        <meta property="og:title" content="YOUR TITLE WEBSITE"></meta>
        <meta name="instagram:title" content="Your Title SocialMedia"></meta>
        <meta name="youtube:title" content="Your Title SocialMedia"></meta>
        <meta name="facebook:title" content="Your Title SocialMedia"></meta>
        <meta name="twitter:title" content="Your Title SocialMedia"></meta>
        <meta name="linkedin:title" content="Your Title SocialMedia"></meta>
        <link rel="icon" href="/assets/favicon.ico" /> {/* Icon - Website */}
        {/*  Description  */}
        <meta
          name="description"
          content="Your Text Description Here"
        ></meta>
        <meta
          itemProp="description"
          content="Your Text Description Here"
        ></meta>
        <meta
          property="og:description"
          content="Your Text Description Here"
        ></meta>
        <meta
          name="instagram:description"
          content="Your Text Description Here"
        ></meta>
        <meta
          name="youtube:description"
          content="Your Text Description Here"
        ></meta>
        <meta
          name="facebook:description"
          content="Your Text Description Here"
        ></meta>
        <meta
          name="twitter:description"
          content="Your Text Description Here"
        ></meta>
        <meta
          name="linkedin:description"
          content="Your Text Description Here"
        ></meta>
        {/*  Website URL  */}
        {/* Links */}
        <link rel="noreferrer" href="https://google.com" />
        <link rel="canonical" href="https://google.com" />
        <meta
          property="og:url"
          content="https://google.com"
        ></meta>
        <meta
          name="instagram:site"
          content="https://google.com"
        ></meta>
        <meta
          name="youtube:site"
          content="https://google.com"
        ></meta>
        <meta
          name="facebook:site"
          content="https://google.com"
        ></meta>
        <meta
          name="twitter:site"
          content="https://google.com"
        ></meta>
        <meta
          name="linkedin:site"
          content="https://google.com"
        ></meta>
        <meta
          property="instagram:url"
          content="https://google.com"
        ></meta>
        <meta
          property="youtube:url"
          content="https://google.com"
        ></meta>
        <meta
          property="facebook:url"
          content="https://google.com"
        ></meta>
        <meta
          property="twitter:url"
          content="https://google.com"
        ></meta>
        <meta
          property="linkedin:url"
          content="https://google.com"
        ></meta>
        {/*  Theme Color Global */}
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="msapplication-TileColor" content="#ffffff"></meta>
        <meta name="msapplication-navbutton-color" content="#ffffff"></meta>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="#ffffff"
        ></meta>
        {/*  Share Image Size  */}
        <meta property="og:locale" content="pt_BR"></meta>
        <meta property="og:image:type" content="/assets/favicon.ico"></meta>
        <meta property="og:image:width" content="1920"></meta>
        <meta property="og:image:height" content="1080"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:card" content="summary_large_image"></meta>
        <meta property="instagram:card" content="summary_large_image"></meta>
        <meta property="youtube:card" content="summary_large_image"></meta>
        <meta property="facebook:card" content="summary_large_image"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="linkedin:card" content="summary_large_image"></meta>
        {/*  Share Image URL  */}
        <meta name="image" content="/assets/favicon.ico"></meta>
        <meta itemProp="image" content="/assets/favicon.ico"></meta>
        <meta property="og:image" content="/assets/favicon.ico"></meta>
        <meta name="youtube:image" content="/assets/favicon.ico"></meta>
        <meta name="instagram:image" content="/assets/favicon.ico"></meta>
        <meta name="facebook:image" content="/assets/favicon.ico"></meta>
        <meta name="twitter:image" content="/assets/favicon.ico"></meta>
        <meta name="linkedin:image" content="/assets/favicon.ico"></meta>
        {/*  Site Name  */}
        <meta name="author" content="Your SocialMedia Name"></meta>
        <meta itemProp="name" content="Your SocialMedia Name"></meta>
        <meta name="instagram:site" content="Your SocialMedia Name"></meta>
        <meta name="youtube:site" content="Your SocialMedia Name"></meta>
        <meta name="facebook:site" content="Your SocialMedia Name"></meta>
        <meta name="twitter:site" content="Your SocialMedia Name"></meta>
        <meta name="linkedin:site" content="Your SocialMedia Name"></meta>
        <meta name="article:author" content="Your SocialMedia Name"></meta>
        <meta name="application-name" content="Your SocialMedia Name"></meta>
        <meta property="og:site_name" content="Your SocialMedia Name"></meta>
        <meta name="apple-mobile-web-app-title" content="Your SocialMedia Name"></meta>
        {/*  Favicons  */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="favicon-64x64.webp"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="apple-touch-icon-60x60.webp"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="apple-touch-icon-72x72.webp"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="apple-touch-icon-76x76.webp"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="apple-touch-icon-114x114.webp"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="apple-touch-icon-120x120.webp"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="apple-touch-icon-144x144.webp"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="apple-touch-icon-152x152.webp"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon-180x180.webp"
        ></link>
        <link
          rel="icon"
          type="image/webp"
          sizes="32x32"
          href="favicon-32x32.webp"
        ></link>
        <link
          rel="icon"
          type="image/webp"
          sizes="194x194"
          href="favicon-194x194.webp"
        ></link>
        <link
          rel="icon"
          type="image/webp"
          sizes="192x192"
          href="android-chrome-192x192.webp"
        ></link>
        <link
          rel="icon"
          type="image/webp"
          sizes="16x16"
          href="favicon-16x16.webp"
        ></link>
        <link
          rel="mask-icon"
          href="safari-pinned-tab.svg"
          color="#181818"
        ></link>
        <meta
          name="msapplication-TileImage"
          content="mstile-144x144.webp"
        ></meta>
        <meta name="msapplication-config" content="browserconfig.xml"></meta>
        {/*  Manifest  */}
        <link rel="manifest" href="site.webmanifest"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default HeadConfig;