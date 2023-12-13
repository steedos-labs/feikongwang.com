import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm hidden" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              {/* <NavLink href="/expense/">报销</NavLink> */}
              {/* <NavLink href="#testimonials">客户评价</NavLink> */}
              {/* <NavLink href="/pricing">报价</NavLink> */}
              {/* <NavLink href="/docs">文档</NavLink> */}
            </div>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
