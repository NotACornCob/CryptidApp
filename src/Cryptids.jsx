import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import LikeButton from "./Components/LikeButton";
import CryptidCard from "./Components/CryptidCard"

function Cryptids() {
    const [likes, setLikes] = useState([])
    const [cryptid, setCryptid] = useState([]);
    const params = useParams();
    const cryptidSelection = params.id;
    console.log(params)
    useEffect(() =>{
        fetch(`http://localhost:3000/Cryptids/${cryptidSelection}`)
          .then(r => r.json())
          .then(data => setCryptid(data))
          .catch(error => console.error(error))
      }, [cryptidSelection]) 
    return (     <>
    <h2>{cryptid.name}</h2>
    <img className="CryptidImg" src={cryptid.image}/>
    <div><p><b>Latest Sighting: {cryptid.lastSighting}</b></p></div>
    <p>{cryptid.description}</p>
    <h2>Additional Info</h2>
    <p>{cryptid.additionalInfo}</p>
  </>
  )
}

export default Cryptids;