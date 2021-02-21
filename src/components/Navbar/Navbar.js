import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container
} from '@material-ui/core';
import './Navbar.scss';

export default function Navbar() {
  return (
    <AppBar position="static" style={{ marginBottom: '40px' }}>
      <Container>
        <Toolbar>
          <Link to="/" className="navbar-link title">
            <Typography variant="h6">
              Rick and Morty's DB
            </Typography>
          </Link>
          <Link to="/characters" className="navbar-link">
            <Button color="inherit">Characters</Button>
          </Link>
          <Link to="/worlds" className="navbar-link">
            <Button color="inherit">Worlds</Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}