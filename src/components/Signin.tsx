"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";

export function SignIn() {
  return (
    <div className="flex justify-center gap-x-3">
      <Button href="/login" color="blue">
        <svg 
            aria-hidden="true"
            className="h-4 w-4 flex-none group-active:fill-current"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
        </svg>
        <span className="ml-2">
          登录
        </span>
      </Button>
    </div>
  )
}