import React, {useState, useEffect} from "react";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header.js";
import axios from "axios";
import styled from "styled-components";

const CharacterListDiv =styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 1rem;
`;


export default function App() {
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
    <main>
      <Header />
      <CharacterListDiv>
      
      {
        (characters.map((character, key) => (
          <CharacterList  
          key={key}
          name={character.name}
          image={character.image}
        />
        ))
        )
      }
    </CharacterListDiv>
     
    </main>
  );
}
