import { CallToAction } from '@/components/CallToAction'
import { Products } from '@/components/Products'
import { Hero } from '@/components/Hero'
import { GlobalFooter } from '@/components/GlobalFooter'
import PrimaryFeatures from '@/components/PrimaryFeatures'
import Customers from '@/components/Customers'
import { Metadata } from 'next'
// import { PlatformFeatures } from '@/components/PlatformFeatures'

export const metadata: Metadata = {
  title: '费控王 - 精准掌握收入支出，智能分析并预测未来'
}

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
