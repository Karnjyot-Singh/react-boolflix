import axios from "axios"
import { useEffect, useState } from "react"


const apiKey = "4536b50a4d717df588d38379be595613";
const apiUrl = "https://api.themoviedb.org/3";

function App() {
  const [searchValue, setSearchValue] = useState("");

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
      
    })
  }

  return (
    <>
      <h1>Ciao</h1>
      <input type="search" value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
      <button onClick={getMovies}>Cerca</button>
    </>
  )
}

export default App
