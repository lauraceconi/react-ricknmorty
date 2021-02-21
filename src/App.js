import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Container,
  Grid,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
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
  return (
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
            <Grid container spacing={3} justify="center">
              <Grid item xs={5}>
                <HomeCard imagePath="/images/characters.jpg" buttonLink="characters">
                  There are so many crazy characters right? Let's take a close looj to all of them!
                </HomeCard>
              </Grid>
              <Grid item xs={5}>
                <HomeCard imagePath="/images/worlds.jpg" buttonLink="worlds">
                  You can't remenber which was the name of world Rick and Morty visited in that episode?
                  Come here and find out!
                </HomeCard>
              </Grid>
            </Grid>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App;
