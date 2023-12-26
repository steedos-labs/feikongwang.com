import { type Metadata } from 'next'

import { CallToAction } from '@/components/CallToAction'
import { Hero } from './components/Hero'
import PrimaryFeatures from './components/PrimaryFeatures'

export const metadata: Metadata = {
  title: '企业支出管理解决方案丨成本管理 | 费用管理',
  description:
    '费控王企业支出管理软件与支出管理解决方案，借助采购、差旅和费用管理等软件，更深入地了解支出情况，管理企业所有支出源，加强支出成本管控，降低成本，提高利润。',
}

export default function RevenueManagement() {
  return (
    <>
      <main>
        <Hero />
        <PrimaryFeatures />
        <CallToAction />
      </main>
    </>
  )
}
