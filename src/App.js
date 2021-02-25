import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Grid,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import Context from './Context';
import { HomeCard } from './components/HomeCard';
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
              <Grid container spacing={6} justify="center">
                {state.pages.map(page => (
                  <Grid item xs={12} sm={5} key={page.url}>
                    <HomeCard imagePath={page.imagePath} buttonLink={page.url}>
                      {page.text}
                    </HomeCard>
                  </Grid>
                ))}
              </Grid>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Context.Provider>
  )
}

export default App;
