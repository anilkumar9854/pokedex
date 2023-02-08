import React, { Component } from "react";
import "./App.css";
import PokemonList from "./Pages/PokemonList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonDetails from "./Pages/PokemonDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={PokemonList} />
          <Route path="/:pokemon" exact component={PokemonDetails} />
        </Switch>
      </Router>
    );
  }
}

export default App;
