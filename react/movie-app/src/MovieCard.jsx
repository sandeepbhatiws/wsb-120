import React from 'react'

export default function MovieCard({ movie }) {
  return (
    <div class="">
        <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path} `} alt="" class=""/>
        
        <div class="flex justify-between py-3 px-3 bg-yellow-300 font-[600]">
            <h1 class="text-[14px]">{movie.title}</h1>
            <p class="text-[14px]">{movie.release_date}</p>
        </div>
    </div>
  )
}
