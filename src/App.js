import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StickyHeader from "./components/StickyHeader/StickyHeader";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <StickyHeader />
        <Switch>
          <Route></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
