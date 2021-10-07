import React from "react";
import Tile from "./Tile";


function Container(props){
    function renderHogs(){
       return props.hogs.map((hog) => 
      {  return (<Tile name={hog.name} image={hog.image}/>)}
        )
    }

  return (
    <div>
        
     {renderHogs()}
    </div>
)
}

export default Container;