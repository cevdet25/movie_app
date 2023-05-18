'use client';

import React from 'react'
import Link from 'next/link'
import {useSearchParams} from 'next/navigation'

const Tab = () => {

    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
    const page = searchParams.get("page")

    const tabs = [
        {
            name: "Popular",
            url: "popular",
            page:"1"
        },
        {
            name: "Top Rated",
            url: "top_rated",
            page:"1"
        },
        {
            name: "Upcoming",
            url: "upcoming",
            page:"1"
        },
        
        
    ]

  return (
    <div className="p-5 w-fit m-auto rounded-lg my-9 font-semibold sm:text-[25px] text-[12px] bg-gray-600 gap-x-12 text-black flex flex-row justify-center items-center">
        {
          tabs.map((tab, i) => (
            <Link className={`cursor-pointer p-3 hover:opacity-75 ${tab.url === genre ? "bg-gray-500 rounded-lg text-amber-600" : ""}`} href={`/?genre=${tab.url}&page=${tab.page}`}>{tab.name}</Link>
            
          ))
        }
    </div>
  )
}

export default Tab