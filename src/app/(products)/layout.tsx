
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { GlobalFooter } from '@/components/GlobalFooter'
import Header from '@/components/Header'

// export const metadata: Metadata = {
//   title: {
//     template: '%s - 费控王',
//     default: '费控王 - 智能验票，精准控费！',
//   },
//   description:
//     'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <GlobalFooter />
    </>
  )
}
