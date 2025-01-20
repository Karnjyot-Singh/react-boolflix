import axios from "axios";
import { useContext, useState } from "react";
import { createContext } from "react";

const GlobalContext = createContext();

const apiKey = "4536b50a4d717df588d38379be595613";
const apiUrl = "https://api.themoviedb.org/3";

function GlobalProvider ({children}) {
 const [movies, setMovies] = useState([]);

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

  function onSearch(searchValue) {
    getMovies(searchValue);
  }

  const providerValue = {
    movies,
    onSearch
  }

    return (
        <GlobalContext.Provider value={providerValue}>{children}</GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext);
}

export {GlobalProvider, useGlobalContext};