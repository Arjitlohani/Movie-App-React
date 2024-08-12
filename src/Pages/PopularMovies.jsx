import Card from "../Components/Common/Card"




const PopularMovies = ({popularMovies}) => {

    
  return (
    <div className="pop-movie">
      <h1 id="pm">Popular Movies</h1>
      <div className="moviecard">

      {popularMovies.map((item) => (
            <Card key={item.id} title={item.original_title} 
            posterPath={item.poster_path} rating={item.rating} overview={item.overview}/>
        ))}

       

      </div>


    
    </div>
    
  )
}

export default PopularMovies
