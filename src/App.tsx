import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Invoice from "./Views/Invoice";
import Upload from "./Views/Upload";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Upload} />
        <Route path="/invoice" component={Invoice} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
