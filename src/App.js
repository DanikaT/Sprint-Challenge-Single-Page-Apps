import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const styledNav = styled.nav`
display: flex;
text-decoration: none;
`;


export default function App() {
  return (
    <div className="App">
<nav className="styled-nav">
  <Link to="/">
    <p className="welcome-page">Home</p>
  </Link>
  <div className="nav-links">
    <Link to="/character-list">
      <p>Characters</p>
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
