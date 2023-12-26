"use client";

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

function classNames(...classes:any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="isolate px-6 py-48 sm:py-64 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">我们已经收到了您提交的表单</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        我们将尽快与您取得联系。
        </p>
      </div>
      <p className="text-center mx-auto mt-2 text-lg leading-8 text-gray-600">
        业务咨询电话 400-820-1612
      </p>

    </div>
  )
}
