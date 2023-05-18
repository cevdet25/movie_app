'use client'

import React, {useState} from 'react'
import Link from 'next/link'


const NextPage = ({params}) => {
    
    const [page, setPage] = useState(params.page)

    
  return (
    <Link href={`/?genre=${params.genre}&page=${ +params.page+1}`}>
        <button onClick={() => setPage(+page+1)} className={`${params.page ? "sm:p-4 p-1 text-amber-600 font-semibold rounded-lg hover:bg-slate-300 transition duration-700 bg-slate-600 sm:w-40 w-28 text-sm sm:text-xl" : ""}`}>{params.page ? "Next Page" : ""}</button>
    </Link>
  )
}

export default NextPage