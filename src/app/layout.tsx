import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { GlobalFooter } from '@/components/GlobalFooter'
import { GlobalHeader } from '@/components/GlobalHeader'

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
          src="/js/keycloak.js"
          defer
        ></script>
        <script type="text/javascript" id="zsiqchat" src="/js/salesiq.js"></script>
      </head>
      <body className="flex h-full flex-col min-h-full bg-white antialiased dark:bg-zinc-900">
        <GlobalHeader />
          {children}
        <GlobalFooter />
      </body>
    </html>
  )
}
