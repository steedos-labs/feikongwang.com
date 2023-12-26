import { CallToAction } from '@/components/CallToAction'
import { Products } from '@/components/Products'
import { Hero } from '@/components/Hero'
import { GlobalFooter } from '@/components/GlobalFooter'
import PrimaryFeatures from '@/components/PrimaryFeatures'
import Customers from '@/components/Customers'
// import { PlatformFeatures } from '@/components/PlatformFeatures'

export default function Home() {
  return (
    <>          
      <main>
        <Hero />
        {/* <Products /> */}
        <PrimaryFeatures />
        {/* <PlatformFeatures /> */}
        <Customers/>
        <CallToAction />
        {/* <Testimonials /> */}
        {/* <Faqs /> */}
      </main>
    </>
  )
}
