import { type Metadata } from 'next'

import { CallToAction } from '@/components/invoice/CallToAction'
import { Faqs } from '@/components/invoice/Faqs'
import { Header } from '@/components/invoice/Header'
import { Hero } from '@/components/invoice/Hero'
import { PrimaryFeatures } from '@/components/invoice/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/invoice/SecondaryFeatures'
import { Testimonials } from '@/components/invoice/Testimonials'

export const metadata: Metadata = {
  title: '对公支付管理系统_供应商付款管理自动化_对公支付',
  description:
    '费控王对公支付管理系统实行对公支付自动化，让开支更具可见性。企业可更好地管理对供应商的付款，更准确地预测和管理现金流。',
}

export default function Home() {
  return (
    <>
      <main>
        {/* <Header /> */}
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        {/* <Faqs /> */}
      </main>
    </>
  )
}
