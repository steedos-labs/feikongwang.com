import { CallToAction } from '@/components/CallToAction'
import { Products } from '@/components/Products'
import { GlobalHeader } from '@/components/GlobalHeader'
import { Hero } from '@/components/Hero'
import { GlobalFooter } from '@/components/GlobalFooter'

export default function Home() {
  return (
    <>          
      <GlobalHeader />
      <main>
        <Hero />
        <Products />
        {/* <SecondaryFeatures /> */}
        {/* <CallToAction /> */}
        {/* <Testimonials /> */}
        {/* <Faqs /> */}
      </main>
      <GlobalFooter/>
    </>
  )
}
