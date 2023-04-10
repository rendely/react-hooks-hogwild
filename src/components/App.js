import React, {useState} from "react";
import Nav from "./Nav";
import Card from "./Card";
import FilterControls from "./FilterControls"

import HOGS from "../porkers_data";

console.log('Data:',HOGS);

function App() {
  const [hogs, setHogs] = useState(HOGS);

  function sortName(){
    setHogs(hogs.slice().sort((a,b) =>{
      if(a.name > b.name) return 1;
      if(a.name < b.name) return -1;
      return 0;
    }));
  }

  function sortWeight(){
    setHogs(hogs.slice().sort((a,b)=> Number(b.weight)-Number(a.weight)));
  }

	return (
		<div className="App">
			<Nav />
      <FilterControls sortName={sortName} sortWeight={sortWeight} />
      <div className="HogList">
      {hogs.map(hog=>(
        <Card hog={hog} key={hog.name}/>
      ))}
      </div>
		</div>
	);
}

export default App;
