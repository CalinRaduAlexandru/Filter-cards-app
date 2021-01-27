import React from "react";
import "./App.css";
import CardList from "../Components/CardList/CardList.component";
import SearchBox from "../Components/SearchBox/SearchBox.component";
import { Switch, Route } from "react-router-dom";
import CardForm from "../Components/CardForm/CardForm";

const App = () => {
  return (
    <div className="App">
      <div className="top-bar">
        <SearchBox />
      </div>
      <Switch>
        <Route exact path="/" component={CardList} />
        <Route path="/submit" component={CardForm} />
      </Switch>
    </div>
  );
};

export default App;
