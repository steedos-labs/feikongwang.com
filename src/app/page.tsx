import { CallToAction } from '@/components/CallToAction'
import { Products } from '@/components/Products'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Products />
        {/* <SecondaryFeatures /> */}
        {/* <CallToAction /> */}
        {/* <Testimonials /> */}
        {/* <Faqs /> */}
      </main>
    </>
  )
}
