import { useParams } from 'react-router-dom'
import { getMovieDetails } from './service'
import { useEffect, useState } from 'react'

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

    console.log(movieDetails)
    
  return (
    <div>
      movieDetails
    </div>
  )
}

export default MovieDetail
