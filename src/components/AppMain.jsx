import AppList from "./AppList";


function AppMain({movies}) {
    return (
        <main>
         <AppList items={movies} sectionTitle="Film"/>
      </main>
    );
}

export default AppMain;