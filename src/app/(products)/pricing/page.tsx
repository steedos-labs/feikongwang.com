
import { Pricing } from '@/components/Pricing'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '费控管理系统报价',
}

export default function Home() {
  return (
    <>
      <main>
        <Pricing />
      </main>
    </>
  )
}
