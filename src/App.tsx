import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useTimer } from "./hooks/useTimer";

import { Home } from "./pages/Home";

import './styles/global.scss';

function App() {
  const { shortBreak } = useTimer()

  return (
      <div className={`app`} id="theme">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
  )
}

export default App
