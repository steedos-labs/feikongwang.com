'use client'

import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

const NavLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-0 py-0 font-medium text-sm text-slate-300 hover:text-slate-50"
    >
      {children}
    </Link>
  )
}
const Login = async()=> {
  (window as any).keycloak.login();
}


const Logout = async()=> {
  (window as any).keycloak.logout();
}

const isAuthenticated = async () => {
  const keycloak = new (window as any).Keycloak({
    url: "https://id.steedos.cn",
    realm: "master",
    clientId: "steedos-oidc-public",
  });
  (window as any).keycloak = keycloak;

  const authenticated = await keycloak.init({
    onLoad: "check-sso",
    silentCheckSsoRedirectUri:
      window.location.origin + "/silent-check-sso.html",
  });

  return authenticated;
};


function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/expense/">报销</MobileNavLink>
            {/* <MobileNavLink href="/#testimonials">客户评价</MobileNavLink> */}
            {/* <MobileNavLink href="/pricing">报价</MobileNavLink> */}
            <MobileNavLink href="/docs/">文档</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">登录</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function GlobalHeader() {
  let [authenticated, setAuthenticated] = useState(false);
  let [user, setUser] = useState<any>();
  let [profile, setProfile] = useState<any>();

  useEffect(() => {
    isAuthenticated().then((authenticated) => {
      setAuthenticated(authenticated);
      console.log(authenticated);
    });
  }, []);
  
  useEffect(() => {
    if (authenticated) {
      (window as any).keycloak.loadUserInfo().then((userInfo:any) => {
        setUser(userInfo);
      });
      (window as any).keycloak.loadUserProfile().then((profile:any) => {
        setProfile(profile);
      });
    }
  }, [authenticated]);

  return (
    <header className="py-2 z-10 bg-black">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-x-6 md:gap-x-8">
            <div className="hidden md:flex md:gap-x-8">
              <NavLink href="/expense/">费用报销</NavLink>
              {/* <NavLink href="/#testimonials">客户评价</NavLink> */}
              {/* <NavLink href="/pricing">报价</NavLink> */}
              <NavLink href="/docs/">文档</NavLink>
            </div>
            {!authenticated && (
              <>
                <div className="hidden md:block md:border-l md:border-slate-300 md:pl-8">
                  <a className="inline-block rounded-lg px-2 py-1 font-medium text-slate-300  hover:text-slate-100" 
                    onClick={Login}>登录</a>
                </div>
                <Button href="/register" color="blue">
                  <span>
                    免费注册
                  </span>
                </Button>
              </>
            )}
            {user &&(
              <>
                <div className="hidden text-slate-300 text-sm md:block md:border-l md:border-slate-300 md:pl-8">
                  {user.name}
                </div>
                <Button onClick={Logout} color="blue">
                  <span>
                    注销
                  </span>
                </Button>
              </>
            )}
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
