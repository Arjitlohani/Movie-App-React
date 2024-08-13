import { useParams } from 'react-router-dom'
import { getMovieDetails } from './service'
import { useEffect, useState } from 'react'
import { environmentConfig } from '../../Utils/Config/environmentConfig'
import Navbar from '../../Components/Partials/Navbar'

const MovieDetail = () => {
    const [movieDetails, setMovieDetails] = useState({})
    const {id} = useParams()
    console.log(id)
    const getDetails =async()=>{
        const details = await getMovieDetails(id)
        setMovieDetails(details)
    }

    useEffect(() => {
        getDetails()
    }, [])
    const genres = movieDetails.genres?.map(genre => genre.name).join(', ')
    const imageBaseUrl = environmentConfig.imageURL;
    const imageUrl = imageBaseUrl + movieDetails.poster_path
    const background = imageBaseUrl + movieDetails.backdrop_path
    const newdate= new Date(movieDetails.release_date)
    const year = newdate.getFullYear()
 


    console.log(movieDetails)
    
  return (
    <div className='hero' style={{ backgroundImage: `url(${background})`,width:"100%" }}>
      <Navbar/><br/>
      
          <div className='row'>
            <div className='col' id='image'>
            <img src={imageUrl} alt={movieDetails.title} />
            </div>
            <div className='col-lg' id='overview'>
            <h1>{movieDetails.original_title}({year})</h1>
            <p>Genres:{genres}</p>
            <p>Release Date:{movieDetails.release_date}({movieDetails.origin_country})</p>
                <h6>Overview:</h6>
                <p>{movieDetails.overview}</p>
                
                <p>Rating:{movieDetails.vote_average}</p>
                <i className="bi bi-heart"></i>
                
                


            </div>

            </div>
        </div>
  )
}

export default MovieDetail
