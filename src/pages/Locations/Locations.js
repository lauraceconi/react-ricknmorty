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
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {locations.map(location => (
              <TableRow>
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
    </Grid>
  )
}
