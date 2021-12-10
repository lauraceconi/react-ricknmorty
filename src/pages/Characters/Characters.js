import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import * as charactersService from '../../services/charactersService';
import { LinkImageCard } from '../../components/Cards';
import { SearchBar } from '../../components/SearchBar';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [hasResults, setHasResults] = useState(true);

  useEffect(() => {
    getCharacters();
    return () => setCharacters([]);
  }, [])

  const getCharacters = () => {
    charactersService.GET_LIST().then(response => {
      setCharacters(response.data.results);
      setHasResults(true);
    });
  }

  const searchCharacter = value => {
    if (value == "") return getCharacters()

    charactersService.FILTER_BY_TEXT(value).then(response => {
      setCharacters(response.data.results);
    }).catch(error => {
      console.log(error);
      setHasResults(false);
    });
  }

  return (
    <>
    <Grid container>
      <Grid item xs={8}>
        <h1>Characters</h1>
      </Grid>
      <Grid item xs={4}>
        <SearchBar placeholder="Enter a character" handleChange={searchCharacter} resetSearch={getCharacters} />
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