import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StickyHeader from "./components/StickyHeader/StickyHeader";
import ProfileAndRepoLookUp from "./components/ProfileAndRepoLookUp/ProfileAndRepoLookUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <StickyHeader />
        <ProfileAndRepoLookUp />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
