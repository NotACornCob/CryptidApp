import React from "react";
import {Link} from 'react-router-dom';


function CryptidCard({id, name, image, description, sightings}) {
  const Cryptids = [id, name, image, description, sightings]

  return (
    <>
      <div><h2>{name}</h2></div>
      <img src={image}/>
      <div><p><Link to={`/Cryptids/${id}`}>View Info</Link></p></div>
    </>
  );
};

export default CryptidCard;