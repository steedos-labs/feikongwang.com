import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | 费控王官网',
    default: '费控王 - 智能验票，精准控费！',
  },
  description:
    '费控王财务收支管理解决方案，借助收入、支出、预算、分析等管理软件，帮助企业预测未来收支情况，加强支出成本管控，降低成本，提高利润。',
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
