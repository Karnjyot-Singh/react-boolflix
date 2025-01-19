import axios from "axios"
import { useEffect, useState } from "react"


const apiKey = "4536b50a4d717df588d38379be595613";
const apiUrl = "https://api.themoviedb.org/3";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  // useEffect(()=>{
  //   getMovies()
  // },  [])

  function getMovies() {
    axios.get(`${apiUrl}/search/movie`, {
      params: {
        api_key: apiKey,
        query: searchValue,

      }
    }).then((resp)=> {
      console.log(resp);
      
      setMovies(resp.data.results);
      
    })
  }

  function handleEnterKey(event) {
    if (event.key === "Enter") {
      getMovies();
    }
  }

  return (
    <>
    <header>
      <div>Boolflix</div>
      <input type="search" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} onKeyUp={handleEnterKey}/>
      <button onClick={getMovies}>Cerca</button>
      </header>  

      <main>
        <section>
          <h2>Film</h2>
          <div>
            {movies.map(movie => (
              <div key={movie.id}>
                <h4>{movie.title}</h4>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
