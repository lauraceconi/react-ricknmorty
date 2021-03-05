import React, { useState, useEffect } from 'react';
import {
  Grid,
} from '@material-ui/core';
import * as SERVICE from '../../services/charactersService';

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    SERVICE.GET_CHARACTERS
      .then(response => {
        setCharacters(response.data.results);
    })
    return () => {
      setCharacters([]);
    }
  }, [])

  return (
    <Grid item xs={5}>
      {characters.map(character => (
        <span>{character.name}</span>
      ))}
    </Grid>
  )
}