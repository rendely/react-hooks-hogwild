import React from "react";
import Nav from "./Nav";
import Card from "./Card";

import hogs from "../porkers_data";
console.log('Data:',hogs);

function App() {
	return (
		<div className="App">
			<Nav />
      <div className="HogList">
      {hogs.map(hog=>(
        <Card hog={hog} key={hog.name}/>
      ))}
      </div>
		</div>
	);
}

export default App;
