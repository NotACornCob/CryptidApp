import { useEffect, useState } from "react";

function Home() {
    const [cryptids, setCryptids] = useState([]);

    useEffect(() =>{
      fetch("http://localhost:4000/cryptids")
        .then(r => r.json())
        .then(data => setMovies(data))
        .catch(error => console.error(error))
    }, [])
  
    const cryptidList = cryptids.map(cryptid =>{
      return < CryptidCard key={cryptid.id} id={cryptid.id} title={cryptid.title} genres={cryptid.genres} time={cryptid.time} />
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