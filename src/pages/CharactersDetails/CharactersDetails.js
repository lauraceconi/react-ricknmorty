// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
import * as charactersService from '../../services/charactersService';
import * as episodesService from '../../services/episodesService';
import formatEpisodeList from '../../helpers/formatEpisodeList';
import './CharacterDetails.scss';

export default function CharactersDetails() {
  const [character, setCharacter] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const { id } = useParams();

  const characterMainInfo = ['name', 'status', 'species', 'gender'];

  useEffect(() => {
    charactersService.GET_ONE(id).then(characterResponse => {
      setCharacter(characterResponse.data);

      const episodesListIds = formatEpisodeList(characterResponse.data.episode);
      episodesService.GET_FILTERED_LIST(episodesListIds).then(episodesResponse => {
        setEpisodes(episodesResponse.data);
      });
    })
    return () => {
      setCharacter({})
    }
  }, [id]);

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <img src={character.image} alt={character.name} />
        </Grid>
        <Grid item xs={8}>
          {characterMainInfo.map(attr => (
            <>
            <List>
              <ListItem alignItems="flex-start">
                <ListItemText>
                  <div className="character-attr">{attr}</div>
                  {character[attr]}
                </ListItemText>
              </ListItem>
            </List>
            <Divider />
            </>
          ))}
          {/* TODO: couldnt get this attr in other way */}
          <List>
            <ListItem alignItems="flex-start">
              <ListItemText>
                <div className="character-attr">Origin</div>
                {character.origin && character.origin.name}
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid container>
        <h2>Episodes list</h2>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow className="head">
                <TableCell>Episode</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Air Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {episodes.map(episode => (
                <TableRow>
                  <TableCell>{episode.episode}</TableCell>
                  <TableCell>{episode.name}</TableCell>
                  <TableCell>{episode.air_date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  )
}