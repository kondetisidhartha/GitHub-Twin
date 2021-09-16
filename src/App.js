import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StickyHeader from "./components/StickyHeader/StickyHeader";
import ProfileAndRepoLookUp from "./components/ProfileAndRepoLookUp/ProfileAndRepoLookUp";

function App() {
  const [searchUserName, setSearchUserName] = useState("kondetisidhartha");

  const onChangeHandler = (name) => {
    setSearchUserName(name);
  };

  return (
    <>
      <BrowserRouter forceRefresh>
        <Header onChange={(name) => onChangeHandler(name)} />
        <StickyHeader userName={searchUserName} />
        <ProfileAndRepoLookUp userName={searchUserName} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
