import { type Metadata } from 'next'
import { CallToAction } from '@/components/expense/CallToAction'
import { Faqs } from '@/components/expense/Faqs'
import { Hero } from '@/components/expense/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/expense/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/expense/SecondaryFeatures'
import { Testimonials } from '@/components/expense/Testimonials'

export const metadata: Metadata = {
  title: '报销管理系统_差旅费管理软件_费用管理软件',
  description:
    '费控王报销管理软件，可轻松实现企业差旅费用的报销管理，让差旅报销在软件中得到更系统的管理。马上登陆费控王官网，了解更多差旅费管理系统与报销管理软件详情！',
}

export default function Home() {
  return (
    <>
      <main>
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
