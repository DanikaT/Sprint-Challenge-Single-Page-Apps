import React from "react";

export default function CharacterCard(props) {
  console.log(props);
  return (
  <div className="character-card">
  
  <h2>{props.name}</h2>   
   <img src={props.image} alt="character-avatar"></img>  
  </div>
  );
}
