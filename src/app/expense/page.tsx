import { CallToAction } from '@/components/expense/CallToAction'
import { Faqs } from '@/components/expense/Faqs'
import { Hero } from '@/components/expense/Hero'
import { Pricing } from '@/components/expense/Pricing'
import { PrimaryFeatures } from '@/components/expense/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/expense/SecondaryFeatures'
import { Testimonials } from '@/components/expense/Testimonials'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        {/* <Testimonials /> */}
        <Pricing />
        {/* <Faqs /> */}
      </main>
    </>
  )
}
