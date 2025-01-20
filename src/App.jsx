import { useState } from "react";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import { GlobalProvider } from "./components/context/GlobalContext";




function App() {

  const [movies, setMovies] = useState([]);

  return (
    <>
      <GlobalProvider>
        <AppHeader />
        <AppMain />
       </GlobalProvider> 
    </>
  )
}

export default App;
