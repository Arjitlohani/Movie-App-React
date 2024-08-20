import { useNavigate, useParams } from "react-router-dom";
import { addToFavourite, getMovieDetails, getMyFavourite } from "./service";
import { useEffect, useState } from "react";
import { environmentConfig } from "../../Utils/Config/environmentConfig";
import Navbar from "../../Components/Partials/Navbar";

const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();

  const getDetails = async () => {
    const details = await getMovieDetails(id);
    setMovieDetails(details);
  };
  const navigate = useNavigate();
  useEffect(() => {
    getDetails();
  }, []);
  const genresup = movieDetails.genres?.map((genre) => genre.name).join(", ");
  const imageBaseUrl = environmentConfig.imageURL;
  const imageUrl = imageBaseUrl + movieDetails.poster_path;
  const background = imageBaseUrl + movieDetails.backdrop_path;
  const newdate = new Date(movieDetails.release_date);
  const year = newdate.getFullYear();
  const [isFavourite, setIsFavourite] = useState(false);
  const [favouriteList, setFavouriteList] = useState([]);
  const [isChangedFavourite, setIsChangedFavourite] = useState(false);


 
  useEffect(() => {
    const isAready = favouriteList.every(item => item.id === Number(id));
    if(Boolean(isAready) === false){
    addToFavouriteHandler();
    }

    
  }, [isFavourite]);

  

  useEffect(() => {

    getMyfavouriteList();

  }, [isChangedFavourite]);

  const addToFavouriteHandler = async () => {
    const reqData = {
      media_id: id,
      media_type: "movie",
      favorite: isFavourite,
    };
    await addToFavourite(reqData);
   
    setIsChangedFavourite((prevState) => !prevState);
  };

  const getMyfavouriteList = async () => {
    const response = await getMyFavourite();
    const isAlreadyExist = await response.results.some(item =>item.id == id);
    if(isAlreadyExist){
      setIsFavourite(true);
    }
    setFavouriteList(response.results);
    
    console.log(response.results, "<><><><><><>");

  };

  console.log(movieDetails);

  return (
    <section>
      <div
        className="hero"
        style={{ backgroundImage: `url(${background})`, width: "100%" }}
      >
        <Navbar />
        <br />

        <div className="row">
          <div className="col" id="image">
            <img src={imageUrl} alt={movieDetails.title} />
          </div>
          <div className="col-lg" id="overview">
            <h1>
              {movieDetails.original_title}({year})
            </h1>
            <p>Genres:{genresup}</p>
            <p>
              Release Date:{movieDetails.release_date}(
              {movieDetails.origin_country})
            </p>
            <h6>Overview:</h6>
            <p>{movieDetails.overview}</p>

            <p>Rating:{movieDetails.vote_average}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="row movieDetailFavourite justify-content-evenly mt-3">
        <div className="col-4" color="black">
          <h6>Genres</h6>
          {movieDetails?.genres?.map((item) => (
            <span className="badge text-bg-secondary me-2 mt-2" key={item?.id}>
              {item?.name}
            </span>
          ))}
          <i
            className={`bi bi-heart${isFavourite ? "-fill" : ""} ms-4 fs-2`}
            onClick={() => setIsFavourite((prevState) => !prevState)}
            style={{ cursor: "pointer", color: isFavourite ? "red" : "" }}
          ></i>
          <br />
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn btn-outline-secondary my-3"
            style={{ fontSize: "0.8rem" }}
          >
            <i className="bi bi-arrow-left"></i> Go Home
          </button>
        </div>

        <div className="col-6" style={{ height: "10%", float: "right" }}>
          <h6>My favourites</h6>
          <div className="accordion" id="accordionExample">
            {favouriteList?.map((item) => (
              <div className="accordion-item" key={item.id}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {item?.title}
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{item?.overview}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
