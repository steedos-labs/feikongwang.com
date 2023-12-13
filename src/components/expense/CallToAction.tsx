import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
          开启您的智能费控之旅
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
          立即注册，即刻体验。费控王的设计直观易用，无需专业知识，您可以快速上手，即刻感受智能发票处理、自动化报销流程和深入的数据分析带来的便利。
          </p>
          <Button href="/register" color="white" className="mt-10">
            立刻免费试用
          </Button>
        </div>
      </Container>
    </section>
  )
}
