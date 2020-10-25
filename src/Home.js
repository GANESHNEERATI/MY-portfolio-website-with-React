import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Contact from "./Contact/Contact";
import Aboutme from "./Profile/Aboutme";
import Education from "./Profile/Education";
import Projects from "./Profile/Projects";
import Work from "./Profile/Work";

function Home() {
  return (
    <div>
      <Switch>
        <Route path="/work" component={Work} />

        <Route path="/education" component={Education} />

        <Route path="/contact" component={Contact} />

        <Route path="/projects" component={Projects} />

        <Route path="/" component={Aboutme} />
      </Switch>
    </div>
  );
}

export default Home;
