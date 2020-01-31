import React, {useState, useEffect} from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import styled from "styled-components";

const CharacterListDiv =styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 1rem;
`;


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
       setCharacters(response.data.results);
      console.log(response.data);
    })

  .catch(error => {
    console.log("Uh ohhh! Where's my data??!!", error);
});

}, []);

 

  return (
   <CharacterListDiv>
     {
        (characters.map((character, key) => (
          <CharacterCard 
          key={key}
          name={character.name}
          image={character.image}
        />
        ))
        )
      }
      
     
   </CharacterListDiv>
  )
}
