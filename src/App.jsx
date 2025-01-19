import axios from "axios"
import { useState } from "react"
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";


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
       <AppMain movies={movies}/>
    </>
  )
}

export default App;
