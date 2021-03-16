// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Grid, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { LinkImageCard } from '../../components/Cards';
import * as locationsService from '../../services/locationsService';
import * as charactersService from '../../services/charactersService';
import formatIdsListFromUrls from '../../helpers/formatIdsListFromUrls';

export default function LocationDetails() {
  const [location, setLocation] = useState({});
  const [characters, setCharacters] = useState([]);
  const { id } = useParams();

  const locationMainInfo = ['name', 'dimension', 'type'];

  useEffect(() => {
    locationsService.GET_ONE(id).then(locationResponse => {
      setLocation(locationResponse.data);

      const charactersListIds = formatIdsListFromUrls(locationResponse.data.residents);
      charactersService.FILTER_BY_IDS(charactersListIds).then(charactersResponse => {
        setCharacters(charactersResponse.data);
      });
    })
    return () => {
      setLocation({});
      setCharacters([]);
    }
  }, [id]);

  return (
    <>
    <Grid container style={{ marginBottom: '40px' }}>
      <Grid item xs={12}>
        {locationMainInfo.map(attr => (
          <>
          <List>
            <ListItem alignItems="flex-start">
              <ListItemText>
                <div className="character-attr">{attr}</div>
                {location[attr]}
              </ListItemText>
            </ListItem>
          </List>
          <Divider />
          </>
        ))}
      </Grid>
    </Grid>
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <h2 style={{ marginBottom: 0 }}>Residents</h2>
      </Grid>
      {characters.map((character, index) => (
        <Grid item xs={12} sm={4} lg={3} key={index}>
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