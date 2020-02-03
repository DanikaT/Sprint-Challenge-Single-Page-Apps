import React from "react";
import styled from "styled-components";

const CharacterCardDiv = styled.div`
text-align: center;
`;

const StyledH2 = styled.h2`
font-family: 'Permanent Marker', cursive;
color: white;
`;

export default function CharacterCard(props) {
  console.log(props);
  return (
  <CharacterCardDiv >
  
  <StyledH2>{props.name}</StyledH2>   
   <img src={props.image} alt="character-avatar"></img>  
  </CharacterCardDiv>
  );
}
