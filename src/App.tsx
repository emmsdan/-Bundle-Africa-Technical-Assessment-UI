import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Invoice from "./Views/Invoice";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Invoice} />
          <Route path="/invoice" component={Invoice} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
