import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import { Providers } from '@/app/docs/providers'
import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { Header } from '@/components/expense/Header'
import { GlobalHeader } from '@/components/GlobalHeader'
import { GlobalFooter } from '@/components/GlobalFooter'

export const metadata: Metadata = {
  title: {
    template: '%s - 报销 | 费控王',
    default: '费控王报销 - 智能验票，精准控费！',
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
    <>
      <GlobalHeader />
      <Header />
      {children}
      <GlobalFooter/>
    </>    
  )
}
