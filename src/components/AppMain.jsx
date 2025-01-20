import AppList from "./AppList";
import { useGlobalContext } from "./context/GlobalContext";


function AppMain() {
    const {movies} = useGlobalContext();
    return (
        <main>
         <AppList items={movies} sectionTitle="Film"/>
      </main>
    );
}

export default AppMain;