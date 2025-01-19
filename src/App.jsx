import axios from "axios"
import { useState } from "react"
import AppCard from "./components/AppCard";
import AppHeader from "./components/AppHeader";


const apiKey = "4536b50a4d717df588d38379be595613";
const apiUrl = "https://api.themoviedb.org/3";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  // useEffect(()=>{
  //   getMovies()
  // },  [])

  function getMovies(searchValue) {
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



  return (
    <>
       <AppHeader onSearch={getMovies}/>

      <main>
        <section>
          <h2>Film</h2>
          <div>
            {movies.map(movie => (
              <AppCard key={movie.id} curItem={movie}/>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
