import React, { useState, useEffect} from "react";
import axios from "axios";
import Header from "./components/Header.js";


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
    </main>
  );
}
//https://rickandmortyapi.com/api/character/`}