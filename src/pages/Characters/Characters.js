import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import * as charactersService from '../../services/charactersService';
import { LinkImageCard } from '../../components/Cards';

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    charactersService.GET_LIST().then(response => {
      setCharacters(response.data.results);
    });
    return () => {
      setCharacters([]);
    }
  }, [])

  return (
    <>
    <h1>Characters</h1>
    <Grid container spacing={6}>
      {characters.map((character, index) => (
        <Grid item xs={12} sm={3} key={index}>
          <LinkImageCard imagePath={character.image} cardLink={`characters/${character.id}`}>
            <h2 color="primary">{character.name}</h2>
            <div><strong>Species:</strong> {character.species}</div>
            <div><strong>Origin:</strong> {character.origin.name}</div>
          </LinkImageCard>
        </Grid>
      ))}
    </Grid>
    </>
  )
}