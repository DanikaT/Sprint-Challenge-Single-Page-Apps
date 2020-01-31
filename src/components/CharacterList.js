import React from "react";

import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
 

  return (
   <div className="character-list">
     <CharacterCard key={props.key} name={props.name} status={props.status} image={props.image} />
   </div>
  )
}
