import { useEffect } from "react"
import Navbar from "../../Components/Partials/Navbar"
import { getPopularMovies } from "./servieces"
import { useState } from "react"

import PopularMovies from "../PopularMovies"


const Dashboard = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const getData= async()=>{
    const popularMoviesData = await getPopularMovies();
    const moviesList = popularMoviesData.results.map(movie => ({
      id: movie.id,
      original_title: movie.original_title,
      poster_path: movie.poster_path,
      rating: movie.vote_average,
      overview: movie.overview
    }));

    setPopularMovies(moviesList)
  }
  useEffect(() => {
    getData()
  },[])
  console.log(popularMovies)
 


  
  return (
    <div>
      
      
      <Navbar/><br/>
      <PopularMovies popularMovies={popularMovies} />
      
        
      
      
    </div>
  )
}

export default Dashboard
