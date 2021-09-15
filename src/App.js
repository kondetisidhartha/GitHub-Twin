import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
