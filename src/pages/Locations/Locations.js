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

export default function Locations() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    locationsService.GET_LIST().then(response => {
      setLocations(response.data.results);
    })
    return () => {
      setLocations([]);
    }
  }, []);

  return (
    <Grid container>
      <h2>Locations</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className="head">
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Dimension</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {locations.map(location => (
              <TableRow>
                <TableCell>{location.name}</TableCell>
                <TableCell>{location.type}</TableCell>
                <TableCell>{location.dimension}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  )
}
