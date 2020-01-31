import React from "react";
import styled from "styled-components";

const CharacterCardDiv = styled.div`
text-align: center;
`;

export default function CharacterCard(props) {
  console.log(props);
  return (
  <CharacterCardDiv >
  
  <h2>{props.name}</h2>   
   <img src={props.image} alt="character-avatar"></img>  
  </CharacterCardDiv>
  );
}
