import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Characters } from './components/Characters';

export default function Routes() {
  return (
    <Switch>
        <Route path="/characters">
          <Characters />
        </Route>
      {/* <Route path="/worlds">
        <Worlds />
      </Route> */}
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}