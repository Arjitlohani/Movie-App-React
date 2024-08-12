// import  { useState } from 'react';
import { environmentConfig } from '../../Utils/Config/environmentConfig';

const Card = ({ title, posterPath, rating }) => {
  // const [isExpanded, setIsExpanded] = useState(false);

  // const toggleReadMore = () => {
  //   setIsExpanded(!isExpanded);
  // };
  const imageBaseUrl = environmentConfig.imageURL;
  const imageUrl = imageBaseUrl + posterPath
 
  // const shortOverview = overview.split(' ').slice(0, 4).join(' ') + '...';

  return (
    <div className="card">
      <img className="card-img-top" src={imageUrl} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {/* <p className="card-text">
          {isExpanded ? overview : shortOverview}
          <span onClick={toggleReadMore} style={{ color: 'grey', cursor: 'pointer' }}>
            {isExpanded ? ' Read less' : ' Read more'}
          </span>
        </p> */}
        <p id="rating">Rating:{rating}</p>
      </div>
    </div>
  );
};

export default Card;
