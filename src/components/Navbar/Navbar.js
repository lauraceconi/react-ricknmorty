import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../core/context';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container
} from '@material-ui/core';

export default function Navbar() {
  const { pages } = useContext(Context);

  return (
    <AppBar position="static" style={{ marginBottom: '40px' }}>
      <Container>
        <Toolbar disableGutters={true}>
          <Link to="/" className="navbar-link title">
            <Typography variant="h6">
              Rick and Morty's DB
            </Typography>
          </Link>
          {pages.map(page => (
            <Link to={`${page.url}`} className="navbar-link" key={page.url}>
              <Button color="inherit">{page.name}</Button>
            </Link>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  )
}