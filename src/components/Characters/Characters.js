import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from '@material-ui/core';

export default function Characters() {
  return (
    <Container>
      <Grid xs={6}>
        <Card>
          <CardContent>
          <Typography color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  )
}