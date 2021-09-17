import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StickyHeader from "./components/StickyHeader/StickyHeader";
import ProfileAndRepoLookUp from "./components/ProfileAndRepoLookUp/ProfileAndRepoLookUp";

function App() {
  // Default username to call API, unless provided in search user input
  const [searchUserName, setSearchUserName] = useState("kondetisidhartha");

  // change of state if user input any name
  const onChangeHandler = (name) => {
    setSearchUserName(name);
  };

  // passing essential props like username to all child components (Here username gets from child
  // component <Header />)
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
