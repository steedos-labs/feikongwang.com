"use client";

import Link from 'next/link'

import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'
import { useEffect, useState } from 'react'

const Login = async()=> {
  (window as any).keycloak.login();
}


const Logout = async()=> {
  (window as any).keycloak.logout();
}

const Register = async()=> {
  (window as any).keycloak.register();
}

const goApp = async()=> {
}

const isAuthenticated = async () => {
  const keycloak = new (window as any).Keycloak({
    url: "https://id.steedos.cn",
    realm: "master",
    clientId: "feikongwang.com",
  });
  (window as any).keycloak = keycloak;

  const authenticated = await keycloak.init({
    onLoad: "check-sso",
    silentCheckSsoRedirectUri:
      window.location.origin + "/silent-check-sso.html",
  });

  return authenticated;
};

export default function LoginPage() {
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
    <SlimLayout>
      {authenticated && user && user.name && (
        <>
          <div className="mt-32 mb-10 font-bold text-2xl text-slate-800 mx-auto text-center">欢迎回来，{user.name}</div>
          <Button type="button" href="https://feikongwang.steedos.cn" variant="solid" color="blue" className="w-full">
            <span>
              进入费控王
            </span>
          </Button>
          <Button type="button" onClick={Logout} variant="outline" className="w-full mt-10">
            <span>
              注销
            </span>
          </Button>
        </>
      )}
      {!user && (
        <>
          <div className="mt-32 mb-10 font-bold text-2xl text-slate-800 mx-auto text-center">快速开始</div>
          <Button type="button" onClick={Login} variant="solid" color="blue" className="w-full">
            <span>
              登录
            </span>
          </Button>
          <Button type="button" onClick={Register} variant="solid" color="blue" className="w-full mt-10">
            <span>
              注册
            </span>
          </Button>
        </>
      )}
    </SlimLayout>
  )
}
