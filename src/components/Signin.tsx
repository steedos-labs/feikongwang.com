"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";

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

export function SignIn() {
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
    <>
    {!authenticated && (
      <>
        <div className="hidden md:block md:pl-8">
          <a className="inline-block rounded-lg px-2 py-1 text-sm font-semibold text-gray-900  hover:text-gray-700" 
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
        <div className="text-sm font-semibold text-gray-900 hover:text-gray-700 lg:pr-4">
          {user.name}
        </div>
        <Button onClick={Logout} color="blue">
          <span>
            注销
          </span>
        </Button>
      </>
    )}
    </>
  )
}