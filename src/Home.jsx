import { useEffect, useState } from "react";
import CryptidCard from "./Components/CryptidCard"

function Home() {
    const [cryptids, setCryptids] = useState([]);

    useEffect(() =>{
      fetch("http://localhost:3000/Cryptids")
        .then(r => r.json())
        .then(data => setCryptids(data))
        .catch(error => console.error(error))
    }, [])
  
    const cryptidList = cryptids.map(cryptid =>{
      return < CryptidCard key={cryptid.id} id={cryptid.id} name={cryptid.name} image={cryptid.image} description={cryptid.description} sightings={cryptid.sightings} />
    })
  
    return (
        <div>
        <header>
        <h1>Home Page</h1>
        </header>
        <main>
          <div>
       <p>Welcome to Cryptid Crawler!</p>
       </div>
       <div>
       {cryptidList}
        </div>
        </main>
        </div>
    );
  };


export default Home; 