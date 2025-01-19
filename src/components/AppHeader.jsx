import { useState } from "react";

function AppHeader({onSearch}) {
    const [searchValue, setSearchValue] = useState("");

    function handleEnterKey(event) {
        if (event.key === "Enter") {
          onSearch(searchValue);
        }
    }
    return (
      <header>
          <div>Boolflix</div>
         <input type="search" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} onKeyUp={handleEnterKey}/>
         <button onClick={() => onSearch(searchValue)}>Cerca</button>
       </header>
    ) 
}

export default AppHeader; 