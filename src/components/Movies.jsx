'use client';

import Image from 'next/image'
import React from 'react';
import { useRouter } from 'next/navigation';

const Movies = ({dt}) => {

  const router = useRouter();
  
  return (
    <div onClick={() => router.push(`/movies/${dt?.id}/?genre`)} className="w-96 h-64 relative z-10">
        <Image 
            className="mix-blend-color-dodge rounded-lg" 
            src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`}
            layout="fill"
            sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
        />
        <div className="absolute inset-0 bg-gray-900 rounded-lg bg-opacity-40 hover:bg-opacity-0 hover:ease-in transition duration-700"/>
        <div className="absolute bottom-0">
            <div className="text-3xl text-white font-bold pb-10 ml-3 opacity-80"> {dt?.original_title} </div>
        </div>
    </div>
  )
}

export default Movies