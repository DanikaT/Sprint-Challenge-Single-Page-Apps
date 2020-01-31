import React, {useState, useEffect} from "react";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header.js";
import axios from "axios";


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
      <section className="character-list">
      <h2>The Rick and Morty Crew!</h2>
      {
        (characters.map((character, key) => (
          <CharacterList  
          key={key}
          name={character.name}
          status={character.status}
          image={character.image}
        />
        ))
        )
      }
    </section>
     
    </main>
  );
}
