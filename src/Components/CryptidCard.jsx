import { useState } from "react";
import {Link} from 'react-router-dom';
import LikeButton from './LikeButton'


function CryptidCard({likecount, id, name, image, description, sightings, keywords}) {
  const Cryptids = [likecount, id, name, image, description, sightings, keywords]

  return (
    <>
      <Link to={`/Cryptids/${id}`}>
      <img className="CryptidImg" src={image}/>
      </Link>
      <h2>{name}</h2>
      <div id="likebutton">< LikeButton likecount={likecount} /></div>
      <p><b>Latest Sighting: {sightings}</b></p>
      <p>{description}</p>
      
    </>
  );
};

export default CryptidCard;