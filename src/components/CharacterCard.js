import React from "react";

export default function CharacterCard(props) {
  console.log(props);
  return (
  <div className="character-card">
  
  <h2>Hi my name is {props.name}</h2>
   <h2>I am {props.status}</h2>   
   <img src={props.image}></img>  
  </div>
  );
}
