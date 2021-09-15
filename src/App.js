import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
