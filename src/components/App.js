import React from "react";
import Nav from "./Nav";
import Container from "./Container";

import hogs from "../porkers_data";

function App() {
	
	return (
		<div className="App">
			<Nav />
			<Container  hogs={hogs}/>
		{/* const hogsTiles = hogs.map((hog) => <div>{hogs.name} {hogs.image})	</div> */}
		</div>
	);
}

export default App;
