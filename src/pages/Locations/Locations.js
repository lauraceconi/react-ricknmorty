import React, { useState, useEffect } from 'react'
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';
import * as locationsService from '../../services/locationsService';
import { Link } from 'react-router-dom';
import { SearchBar } from '../../components/SearchBar';

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [hasResults, setHasResults] = useState(true);

  useEffect(() => {
    getLocations();
    return () => setLocations([]);
  }, []);

  const getLocations = () => {
    locationsService.GET_LIST().then(response => {
      setLocations(response.data.results);
      setHasResults(true);
    })
  }

  const searchLocation = value => {
    if (value == "") return getLocations()

    locationsService.FILTER_BY_TEXT(value).then(response => {
      setLocations(response.data.results);
    }).catch(error => {
      console.log(error);
      setHasResults(false);
    });
  }

  return (
    <Grid container>
      <Grid item xs={8}>
        <h1>Locations</h1>
      </Grid>
      <Grid item xs={4}>
        <SearchBar placeholder="Enter a location" handleChange={searchLocation} resetSearch={getLocations} />
      </Grid>
      {hasResults ? (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className="head">
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Dimension</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {locations.map(location => (
              <TableRow key={location.id}>
                <TableCell>{location.name}</TableCell>
                <TableCell>{location.type}</TableCell>
                <TableCell>{location.dimension}</TableCell>
                <TableCell>
                  <Link to={`locations/${location.id}`} className="table-link">
                    + More information
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      ) : (
        <Grid item xs={12}>
          <h2>Nothing here</h2>
        </Grid>
      )}
    </Grid>
  )
}
