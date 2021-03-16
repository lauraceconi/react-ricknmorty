import React, { useState, useEffect } from 'react';
import { Grid, TextField } from '@material-ui/core';
import * as charactersService from '../../services/charactersService';
import { LinkImageCard } from '../../components/Cards';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [hasResults, setHasResults] = useState(true);

  useEffect(() => {
    getCharacters();
    return () => {
      setCharacters([]);
    }
  }, [])

  const getCharacters = () => {
    charactersService.GET_LIST().then(response => {
      setCharacters(response.data.results);
      setHasResults(true);
    });
  }

  const searchCharacter = event => {
    const value = event.target.value;
    if (value.length > 2) {
      charactersService.FILTER_BY_TEXT(value).then(response => {
        setCharacters(response.data.results);
      }).catch(error => {
        console.log(error);
        setHasResults(false);
      });
    } else {
      getCharacters();
    }
  }

  return (
    <>
    <Grid container>
      <Grid item xs={8}>
        <h1>Characters</h1>
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="outlined-basic"
          placeholder="Search character"
          variant="standard"
          style={{ width: '100%' }}
          onChange={event => searchCharacter(event)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
    <Grid container spacing={6}>
      {hasResults ? (
        <>
          {characters.map((character, index) => (
            <Grid item xs={12} sm={4} lg={3} key={index}>
              <LinkImageCard imagePath={character.image} cardLink={`characters/${character.id}`}>
                <h2 color="primary">{character.name}</h2>
                <div><strong>Species:</strong> {character.species}</div>
                <div><strong>Origin:</strong> {character.origin.name}</div>
              </LinkImageCard>
            </Grid>
          ))}
        </>
      ) : (
        <Grid item xs={12}>
          <h2>Nothing here</h2>
        </Grid>
      )}
    </Grid>
    </>
  )
}