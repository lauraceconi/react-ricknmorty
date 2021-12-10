import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  createTheme,
  ThemeProvider,
  Grid
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import Routes from './Routes';
import Context from './core/context';
import { Navbar } from './components/Navbar';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: green[400],
    },
    secondary: {
      main: green[800],
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
          <Grid container className="grid">
            <Routes />
          </Grid>
        </Router>
      </ThemeProvider>
    </Context.Provider>
  )
}

export default App;
