import Card from "../../Components/Common/Card"
import { getPopularMovies } from "../Dashboard/services"
import { useEffect, useState } from "react"




const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const getData= async()=>{
    const popularMoviesData = await getPopularMovies();
    setPopularMovies(popularMoviesData.results)
    // const moviesList = popularMoviesData.results.map(movie => ({
    //   id: movie.id,
    //   original_title: movie.original_title,
    //   poster_path: movie.poster_path,
    //   rating: movie.vote_average,
    //   overview: movie.overview
    // }));

  //   setPopularMovies(moviesList)
  }
  useEffect(() => {
    getData()
  },[])

    
  return (
    <div className="pop-movie">
      <h1 id="pm">Popular Movies</h1>
      <div className="moviecard">

      {popularMovies.map((item) => (
            <Card key={item.id} title={item.original_title} 
            id={item.id}
            posterPath={item.poster_path} rating={item.vote_average} overview={item.overview}/>
        ))}
      </div>


    
    </div>
    
  )
}

export default PopularMovies
