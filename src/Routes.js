import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Characters } from './pages/Characters';
import { CharacterDetails } from './pages/CharacterDetails';
import { Locations } from './pages/Locations';
import { LocationDetails } from './pages/LocationDetails';

export default function Routes() {
  return (
    <Switch>
      <Route path="/characters/:id">
        <CharacterDetails />
      </Route>
      <Route path="/locations/:id">
        <LocationDetails />
      </Route>
      <Route path="/characters">
        <Characters />
      </Route>
      <Route path="/locations">
        <Locations />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}