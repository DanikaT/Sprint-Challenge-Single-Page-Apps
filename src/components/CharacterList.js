import React from "react";
import CharacterCard from "./CharacterCard";





export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
 

  return (
   <div>
     <CharacterCard key={props.key} name={props.name} image={props.image} />
   </div>
  )
}
