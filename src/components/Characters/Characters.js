import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
} from '@material-ui/core';

export default function Characters() {
  return (
    <Grid item xs={5}>
      <Card>
        <CardContent>
        <Typography color="textSecondary" gutterBottom>
        Word of the Day
      </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}