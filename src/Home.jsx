import { useEffect, useState } from "react";
import CryptidCard from "./Components/CryptidCard"

function Home() {
    const [cryptids, setCryptids] = useState([]);
    const [likeCount, setLikeCount] = useState();
    useEffect(() =>{
      fetch("http://localhost:3000/Cryptids")
        .then(r => r.json())
        .then(data => setCryptids(data))
        .catch(error => console.error(error))
    }, [])

    const cryptidList = cryptids.map(cryptid =>{
      console.log(cryptid.likes)
      return < CryptidCard likecount={cryptid.likes} key={cryptid.id} id={cryptid.id} name={cryptid.name} image={cryptid.image} description={cryptid.description} sightings={cryptid.lastSighting} keywords={cryptid.keywords} />
    })
  
    return (
        <div className="Home">
        <main><div>
        <h1>Cryptid.Go</h1> 
        <p><b>Join our community of cryptid seekers!</b></p>
        </div>
          <div>
       </div>
       <div>
       {cryptidList}
        </div>
        </main>
        </div>
    );
  };


export default Home; 