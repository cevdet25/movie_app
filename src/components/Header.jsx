'use client'

import React from 'react'
import Link from 'next/link'
import {useSearchParams} from 'next/navigation'

const Header = () => {

  const searchParams = useSearchParams();
  
  return (
    <Link href="/">
      <div className="flex items-center w-fit sm:m-0 m-auto gap-3 h-20 p-5">
          <div className="bg-amber-600 mt-6 rounded-lg sm:p-6 p-3 text-3xl font-bold">Moviapp {searchParams == "" ? "Trends" : ""}</div>
      </div>
    </Link>
  )
}

export default Header 