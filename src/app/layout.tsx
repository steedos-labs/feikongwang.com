import clsx from 'clsx'

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
      )}
    >
      <head>
        <link rel="icon" type="image/svg" href="/logo.svg"/>
        <script
          src="/js/keycloak.js"
          defer
        ></script>
        <script type="text/javascript" id="zsiqchat" src="/js/salesiq.js"></script>
      </head>
      <body className="flex h-full flex-col min-h-full bg-white antialiased dark:bg-zinc-900">
        {children}
      </body>
    </html>
  )
}
