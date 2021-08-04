import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from "./pages/Home";

import './styles/global.scss';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
     </BrowserRouter>
    </div>
  )
}

export default App
