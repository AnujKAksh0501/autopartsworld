import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'
import Script from 'next/script'

export const metadata = {
  title: {
    template: 'Engines Store',
    default: 'Engines Store - For all your car part needs.',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-orange-400 text-base antialiased">
      <head>
        <Script id="BDB_BASE_FILE" strategy="beforeInteractive">
          {`
            var _paq = (window._paq = window._paq || []);
            _paq.push(['enableLinkTracking'], ['enableHeartBeatTimer', 30], ['trackAllContentImpressions']);
            (function () {
            var u = 'https://javeed.bangdb.com:18080/stream/A1carparts_ClickStream/event';
            _paq.push(['setTrackerUrl', u], ['setSiteId', 'A1carparts']);
            })();
            var _mtm = window._mtm = window._mtm || [];
            _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
          `}
        </Script>

        <Script
          id="BDB_CONTAINERS"
          src="https://cdn.bangdb.com/tm/KpG4GoZiM6Py/matomo.js"
          strategy="afterInteractive"
        />
        <Script
          id="BDB_CONTAINERS"
          src="https://cdn.bangdb.com/tm/KpG4GoZiM6Py/05bf5040c36d473a9c1fb634cd53e456/mastercontainer.js"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MT5JDTF2');
            `}
        </Script>
      </head>

      <body className="flex min-h-full flex-col">
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MT5JDTF2" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
