import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container
} from '@material-ui/core';
import { NavbarLink } from './styles';

export default function Navbar() {
  return (
    <AppBar position="static" style={{ marginBottom: '40px' }}>
      <Container>
        <Toolbar style={{ paddingLeft: 0, paddingRight: 0 }}>
          <NavbarLink to="/" style={{ flex: 1 }}>
            <Typography variant="h6">
              Rick and Morty's DB
            </Typography>
          </NavbarLink>
          <NavbarLink to="/characters">
            <Button color="inherit">Characters</Button>
          </NavbarLink>
          <NavbarLink to="/worlds">
            <Button color="inherit">Worlds</Button>
          </NavbarLink>
        </Toolbar>
      </Container>
    </AppBar>
  )
}