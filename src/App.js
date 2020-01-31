import React from "react";
import Header from "./components/Header.js";
import { Route, Switch, Link } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";




export default function App() {
  return (
    <div className="App">
<nav>
  <Link to="/">
    <h1 className="welcome-page">Home</h1>
  </Link>
  <div className="nav-links">
    <Link to="/character-list">
      <h1>Characters</h1>
    </Link>
  </div>
</nav>
<Switch>
  <Route exact path="/">
    <WelcomePage />
  </Route>
  <Route exact path="/character-list">
    <CharacterList/>
  </Route>
  <Route path="character-list/:characterId">
    <CharacterCard/>
  </Route>
</Switch>
    </div>
  );
}
