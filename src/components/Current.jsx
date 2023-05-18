'use client'

import React, {useState} from 'react'
import Link from 'next/link'


const Current = ({params}) => {
    
    const [page, setPage] = useState(params.page)

    
  return (
    
        <button className={`${params.page ? "mx-2 sm:p-4 p-1 text-amber-600 font-semibold rounded-lg hover:bg-slate-300 transition duration-700 bg-slate-600 sm:w-40 w-28 text-sm sm:text-xl" : ""}`}>{params.page ? params.page : ""}</button>
    
  )
}

export default Current