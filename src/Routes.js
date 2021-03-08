import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Characters } from './pages/Characters';
import { CharactersDetails } from './pages/CharactersDetails';

export default function Routes() {
  return (
    <Switch>
      <Route path="/characters/:id">
        <CharactersDetails />
      </Route>
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