// import React from 'react'
import { useEffect, useState } from "react"
import {getMyFavourite} from "../movieDetails/service"
import Navbar from "../../Components/Partials/Navbar"
import Card from "../../Components/Common/Card"


const FavoriteMovies = () => {

  const [favouriteList, setFavouriteList] = useState([])

  useEffect(() => {
    getMyfavouriteList()
  },[])

  const getMyfavouriteList = async () => {
    const response = await getMyFavourite()
    setFavouriteList(response.results)
    console.log(response.results, '<><><><><><')
  }
  return (
    <>
    <Navbar/>
        <div className="moviecard" >
          {favouriteList.
         map((item) => (
          <Card key={item.id} title={item.original_title} 
          id={item.id}
          posterPath={item.poster_path} rating={item.vote_average} overview={item.overview}/>
      ))}
      
        </div>

    
    </>
  )

}

export default FavoriteMovies




