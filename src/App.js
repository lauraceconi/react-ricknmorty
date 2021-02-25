import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import Context from './Context';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Characters } from './components/Characters';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

function App() {

  const state = useContext(Context);

  return (
    <Context.Provider value={state}>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
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
        </Router>
      </ThemeProvider>
    </Context.Provider>
  )
}

export default App;
