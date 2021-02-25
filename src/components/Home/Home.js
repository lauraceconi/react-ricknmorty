import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import Context from '../../Context';
import ImageCard from './ImageCard';

export default function Home() {
  const { pages } = useContext(Context);

  return (
    <Grid container spacing={6} justify="center">
      {pages.map(page => (
        <Grid item xs={12} sm={5} key={page.url}>
          <ImageCard imagePath={page.imagePath} buttonLink={page.url}>
            {page.text}
          </ImageCard>
        </Grid>
      ))}
    </Grid>
  )
}