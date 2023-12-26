import { CallToAction } from '@/components/CallToAction'
import { Products } from '@/components/Products'
import { Hero } from '@/components/Hero'
import { GlobalFooter } from '@/components/GlobalFooter'
import PrimaryFeatures from '@/components/PrimaryFeatures'
// import { PlatformFeatures } from '@/components/PlatformFeatures'

export default function Home() {
  return (
    <>          
      <main>
        <Hero />
        {/* <Products /> */}
        <PrimaryFeatures />
        {/* <PlatformFeatures /> */}
        <CallToAction />
        {/* <Testimonials /> */}
        {/* <Faqs /> */}
      </main>
    </>
  )
}
