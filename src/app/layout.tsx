import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import { Providers } from '@/app/docs/providers'
import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - 费控王',
    default: '费控王 - 智能验票，精准控费！',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth',
        inter.variable,
        lexend.variable,
      )}
    >
      <head>
        <link rel="icon" type="image/png" href="/logo.png"/>
        <script
          src="https://unpkg.steedos.cn/keycloak-js@21.0.2/dist/keycloak.js"
          defer
        ></script>
        <script type="text/javascript" id="zsiqchat">var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "siq06a2aa9876671422010a01628b2c73509eeee50b63a8c87af75f3824d231afac", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.com.cn/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);</script>
      </head>
      <body className="flex h-full flex-col min-h-full bg-white antialiased dark:bg-zinc-900">
          {children}
      </body>
    </html>
  )
}
