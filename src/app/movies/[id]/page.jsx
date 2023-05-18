import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

async function getMovies(id) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=960310536b86d324d0d0fc24ac357503`);
    return await res.json();
}

const Page = async ({params}) => {
    const movie = await getMovies(params.id)
    console.log(movie)
  return (
    
    <div className="rounded-lg sm:flex sm:flex-row flex p-3 flex-col gap-5">
        <Link target="_blank" href={`https://www.themoviedb.org/movie/${movie.id}-${movie.title.replace(/\s+/g, '-').toLowerCase()}`}>
            <Image 
                
                className="rounded-lg sm:ml-3 "
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}`}
                width="550"
                height="550"
            />
        </Link>
        <div className="sm:w-[800px] bg-gray-500 p-3 rounded-lg h-fit">
            <span className="text-4xl text-black-600 font-bold">{movie.title}</span>
            <div className="w-fit flex flex-wrap gap-3 mt-3">
                {movie.genres.map(genre => {
                    return (
                        <div title="genre" className={`text-xl font-semibold text-sky-100 p-3 rounded-lg cursor-pointer
                            ${genre.name == "Horror" ? "bg-black" : 
                              genre.name == "Thriller" ? "bg-blue-800" : 
                              genre.name == "Action" ? "bg-red-600" : 
                              genre.name == "Crime" ? "bg-red-800" : 
                              genre.name == "Comedy" ? "bg-yellow-600" : 
                              genre.name == "Fantasy" ? "bg-purple-700" : "bg-gray-400"}`}>
                            {genre.name}
                        </div>
                    )
                })}
            </div>
            <div title="Popularity" className="p-2 w-fit h-fit bg-sky-500 font-medium text-md rounded-md mt-3 cursor-pointer">{movie.popularity}</div>
            <p className="mt-3 text-xl">{movie.overview}</p>
        </div>
    </div>
    
  )
}

export default Page