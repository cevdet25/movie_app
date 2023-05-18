import React from 'react'
import Link from 'next/link'
import Movies from '../components/Movies'
import Previous from '../components/Previous'
import Current from '../components/Current'
import NextPage from '../components/NextPage'

const Page = async ({searchParams}) => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjAzMTA1MzZiODZkMzI0ZDBkMGZjMjRhYzM1NzUwMyIsInN1YiI6IjY0NTYyNTg5OTAzYzUyMDBlMzhlYWM0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l9nKkbSl7hV07te4ZGAq3Z7IQ8xs2JpGnyTb48ALDrU'
    }
  };
  
  let answer = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/movie/day"}?language=en-US${searchParams.page ? "&page=" + searchParams.page : ""}`, options)
  let current = await answer.json()

  return (
    <div className="flex flex-col items-center justify-items-stretch flex-wrap gap-3">
      <div className="flex items-center justify-center flex-wrap gap-3">
      {
          current?.results?.map((dt, i) => (
            <Movies
              key = {i}
              dt={dt}
            />
          ))
        }
      </div>
      <div className="sm:p-3 p-1">
        <Previous
          params = {searchParams}
        />
        <Current
          params = {searchParams}
        />
        <NextPage
          params = {searchParams}
        />
      </div>
    </div>
  )
  
}

export default Page