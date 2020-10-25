import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import "./App.css";

import BrowserRouter from "react-router-dom/BrowserRouter";

import Home from "./Home";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Sidebar from "./Header/Sidbar/Sidebar";

function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="app">
      {/*header with navigation  */}
      <BrowserRouter>
        <Header handle_toggle={handleToggle} />
        {console.log(toggle)}

        {/* profile with information */}
        {toggle && <Sidebar handle_toggle={handleToggle} tg={toggle} />}

        <Profile />

        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
